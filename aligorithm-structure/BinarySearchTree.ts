import { BinaryTreeNode, ldr } from './BinaryTree';

type Node<E> = BinaryTreeNode<E>["left"];

type CompareFn<E> = (insertData:E, nodeData:E) => number;
type Direction = 'left' | 'right' | '';

class BinarySearchTree<E> {
  private root?: BinaryTreeNode<E>;
  private length: number = 0;

  constructor() {}

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
   * 根据 data 查找节点
   * @param data 
   * @param compare 
   * @returns 返回找到的节点与对应的父节点
   */
  protected findNode(data: E, compare: CompareFn<E>): {node: Node<E>, parent: Node<E>, direction: Direction} {
    let parent: Node<E>;
    let node: Node<E> = this.root;
    let direction: Direction = ''; 
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
   * 查找节点中最右节点，即最大节点
   * @param root 
   * @returns 
   */
  protected maxNode(root?: Node<E>) {
    let node = root || this.root;
    while(node?.right) {
      node = node.right
    }
    return node;
  }
  
  find(data: any): E|undefined {
  }

  insert(data: E): boolean {
    if (!this.root) {
      this.root = new BinaryTreeNode(data);
      this.length += 1;
      return true;
    }

    const { node, parent, direction } = this.findNode(data, this.compare);
    if (node || !parent) {
      return false;
    }
    parent[direction] = new BinaryTreeNode(data);
    this.length += 1;
    return true;
  }

  remove(data: E): boolean {
    const { node, parent, direction } = this.findNode(data, this.compare);
    if (!node) return false;

    if (parent) {
      let degree = 0;
      if (node.left) degree += 1; 
      if (node.right) degree += 1;

      if (degree === 0) {
        parent[direction] = undefined;
      } else if (degree === 1) {
        parent[direction] = node.left || node.right
      } else {
        let maxNode = node
        let maxNodeParent: BinaryTreeNode<E> = node.right!;
        while(maxNode.right) {
          maxNodeParent = maxNode;
          maxNode = maxNode.right
        }
        maxNodeParent.right = undefined;
        parent[direction] = maxNode;
      }
      this.length -= 1;
      return true;

    } else {
      parent
    }
  }

}