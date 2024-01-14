import { BinaryTreeNode } from './BinaryTree';
import { BinarySearchTree } from './BinarySearchTree';

type Direction = 'left' | 'right';
type Node<E> = BinaryTreeNode<E>["left"];
type CompareFn<E> = (insertData:E, nodeData:E) => number;

/**
 * 不稳定的二叉搜索树实现，最差情况下二叉搜索树将退化成单链表
*/
export class UnstableSearchTree<E> extends BinarySearchTree<E>{
  private length: number = 0;

  /**
   * 根据 data 查找节点
   * @param data 需要插入的节点数据
   * @param compare 插入比较函数
   * @returns 若找到data对应的节点则返回该节点，该节点的父节点，在父节点中的位置   
   * 否则返回 undefined, 以及对应 data 节点对应的父节点，在父节点中的位置
   */
  private findNode(data: E, compare: CompareFn<E>): {node: Node<E>, parent: Node<E>, direction: Direction|null} {
    let node: Node<E> = this.root;
    let parent: Node<E>;
    let direction: Direction|null = null; 
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
   * 返回节点数
   * @returns 
   */
  size(): number {
    return this.length;
  }

  /**
   * @override
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
   * @override
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
    // 左子节点无右节点
    if (maxNodeParent === node) {
      node.left = undefined;
    } else {
      maxNodeParent.right = undefined;
    }
    node.data = maxNode.data;

    this.length -= 1;
    return true;
  }
}
