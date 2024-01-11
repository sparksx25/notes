import { BinaryTreeNode, ldr } from './BinaryTree';

type Direction = 'left' | 'right' | null;
type Node<E> = BinaryTreeNode<E>["left"];
type CompareFn<E> = (insertData:E, nodeData:E) => number;

export class BinarySearchTree<E> {
  private root?: BinaryTreeNode<E>;
  private length: number = 0;

  /**
   * 根据 data 查找节点
   * @param data 需要插入的节点数据
   * @param compare 插入比较函数
   * @returns 若找到data对应的节点则返回该节点，该节点的父节点，在父节点中的位置   
   * 否则返回 undefined, 以及对应 data 节点对应的父节点，在父节点中的位置
   */
  protected findNode(data: E, compare: CompareFn<E>): {node: Node<E>, parent: Node<E>, direction: Direction} {
    let node: Node<E> = this.root;
    let parent: Node<E>;
    let direction: Direction = null; 
    while(node) {
      const res = compare(data, node.data);
      if (res === 0) break;
      parent = node;
      node = res < 0 ? node.left : node.right;
      direction = res < 0 ? 'left' : 'right';
    }
    return {
      node,
      parent,
      direction
    };
  }

  /**
   * 决定节点插入左边还是右边
   * @param insertData 待插入数据
   * @param nodeData 节点数据
   * @returns 返回值小于0插入左边，大于0插入右边，等于0则表示相等
   */
  compare(insertData: E, nodeData:E): number {
    return Number(insertData) - Number(nodeData);
  }

  /**
   * 返回节点数
   * @returns 
   */
  size(): number {
    return this.length;
  }

  /**
   * 获取节点中的最大值
   */
  max():E|undefined {
    let node = this.root;
    while(node?.right) {
      node = node.right;
    }
    return node?.data;
  }

  /**
   * 获取节点中的最小值
   */
  min():E|undefined {
    let node = this.root;
    while(node?.left) {
      node = node.left;
    }
    return node?.data;
  }

  /**
   * 数据插入
   * @param data 
   * @returns 插入成功返回 true，元素已存在则返回 false
   */
  insert(data: E): boolean {
    if (!this.root) {
      this.root = new BinaryTreeNode(data);
      this.length += 1;
      return true;
    }

    const { node, parent, direction } = this.findNode(data, this.compare);
    if (node) return false;

    parent![direction!] = new BinaryTreeNode(data);
    this.length += 1;
    return true;
  }

  /**
   * 数据删除
   * @param data 
   * @returns 
   */
  remove(data: E): boolean {
    const { node, parent, direction } = this.findNode(data, this.compare);
    if (!node) return false;

    let degree = 0;
    if (node.left) degree += 1; 
    if (node.right) degree += 1;

    if (degree < 2) {
      const child = node.left ? node.left : node.right;
      if (parent) {
        parent[direction!] = child;
      } else {
        this.root = child;
      }
      this.length -= 1;
      return true;
    }

    let maxNode = node.left!;
    let maxNodeParent: Node<E> = node;
    while(maxNode.right) {
      maxNodeParent = maxNode;
      maxNode = maxNode.right
    }
    if (parent) {
      // 左子节点无右节点
      if (maxNodeParent === node) {
        parent[direction!] = maxNode;
        maxNode.right = node.right;
      } else {
        parent[direction!]!.data = maxNode.data;
        maxNodeParent.right = undefined;
      }
    } else {
      // 左子节点无右节点
      if (maxNodeParent === node) {
        this.root = maxNode;
        maxNode.right = node.right;
      } else {
        this.root!.data = maxNode.data;
        maxNodeParent.right = undefined;
      }
    }

    this.length -= 1;
    return true;
  }

  /**
   * 以中序遍历的顺序返回元素列表
   * @returns 
   */
  toList(): E[] {
    const list: E[] = [];
    if (this.root) {
      ldr<E>(this.root, (data) => {
        list.push(data);
      });
    }
    return list;
  }
}

