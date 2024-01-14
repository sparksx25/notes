
import { BinaryTreeNode } from './BinaryTree';
import { BinarySearchTree } from './BinarySearchTree';

import type { Direction } from './BinaryTree';

class TreeNode<E> extends BinaryTreeNode<E> {
  // 节点的高度
  public height:number = 0;
  public left?: TreeNode<E>;
  public right?: TreeNode<E>;
  constructor(data: E){
    super(data);
  }
}

type Node<E> = TreeNode<E>["left"];

/**
 * 平衡二叉搜索树
 */
export class AVLTree<E> extends BinarySearchTree<E> {
  protected root?: TreeNode<E>;
  private length: number = 0;

  constructor() {
    super();
  }

  /**
   * 获取节点高度: 空节点高度为 -1, 叶子节点高度为 0
   * @param node 
   * @returns 
   */
  private height(node: Node<E>) {
    return node ? node.height : -1;
  }

  /**
   * 更新节点高度,每次添加节点之后，高度加1
   * @param node 
   */
  private updateHeight(node: TreeNode<E>) {
    node.height = 1 + Math.max(
      this.height(node.left),
      this.height(node.right)
    );
  }

  /**
   * 获取节点的平衡因子
   * 平衡因子: 子树节点的左子节点高度减去右子节点高度   
   * 若平衡因子的绝对值大于 1 则该子树节点失衡
   * @param node 
   */
  private balanceFactor(node: Node<E>): number {
    return this.height(node?.left) - this.height(node?.right);
  }

  /**
   * 左偏树右旋   
   * 右旋：   
   *  1. 将 node 旋转到左子节点的右节点
   *  2. 左子节点的高度大于等于右子节点的高度
   * @param node 
   * @returns 
   */
  private rightRotate(node: Node<E>):Node<E> {
    if (!node) return node;
    const root = node.left!;
    const grandChild = root.right;
    root.right = node;
    node.left = grandChild;
    this.updateHeight(node);
    this.updateHeight(root);
    return root;
  }

  /**
   * 右偏树左旋
   * @param node 
   */
  private leftRotate(node: Node<E>):Node<E> {
    if (!node) return node;
    const root = node.right!;
    let grandChild = root.left;
    root.left = node;
    node.right = grandChild;
    this.updateHeight(node);
    this.updateHeight(root);
    return root;
  }

  private rotate(node: TreeNode<E>): Node<E> {
    const factor = this.balanceFactor(node);
    // 左偏树
    if (factor > 1) {
      // 先左旋后右旋
      if (this.balanceFactor(node.left) < 0) {
        node.left = this.leftRotate(node.left);
      }
      // 右旋
      node = this.rightRotate(node)!;
    } else if (factor < -1) {
      if (this.balanceFactor(node.right) > 0) {
        node.right = this.rightRotate(node.right);
      }
      node = this.leftRotate(node)!;
    }
    return node;
  }

  /**
   * @override
   */
  size(): number {
    return this.length;
  }

  /**
   * @override
   * @param data 
   */
  insert(data: E): boolean {
    let exist = false;

    const travel = (node: TreeNode<E>, parent?: Node<E>, direction?: Direction) => {
      const res = this.compare(data, node.data);
      if (res === 0) {
        exist = true;
        return;
      };
      const child = res < 0 ? node.left : node.right;
      const childDirection:Direction = res < 0 ? 'left' : 'right';

      if (child) { travel(child, node, childDirection); }
      else { node[childDirection] = new TreeNode(data); }

      if (exist) return;

      this.updateHeight(node);
      const rotateRoot = this.rotate(node);

      if (parent) { parent[direction!] = rotateRoot; }
    }

    if (this.root) { travel(this.root) }
    else { this.root = new TreeNode(data) };

    if (exist) return false;

    this.length += 1;
    return true;
  }

  /**
   * @override
   * @param data 
   */
  remove(data: E): boolean {
    let exist = false;
    const travel = (node: TreeNode<E>, parent?: Node<E>, direction?:Direction) => {
      let degree = 0;
      if (node.left) degree++;
      if (node.right) degree++;

      let updateNode = parent;
      const res = this.compare(data, node.data);
      if (res === 0) {
        exist = true;
        if (degree < 2) {
          const child = node.left ? node.left : node.right;
          if (parent) { 
            parent[direction!] = child;
          } else { 
            this.root = child;
            updateNode = this.root;
          }
        } else {
          let maxNode = node.left!;
          let maxNodeParent = node;
          while(maxNode?.right) {
            maxNodeParent = maxNode;
            maxNode = maxNode.right;
          }
          if (maxNodeParent === node) {
            node.left = undefined;
          } else {
            maxNodeParent.right = undefined;
          }
          node.data = maxNode.data;
        }
      } else {
        const child = res < 0 ? node.left : node.right;
        const childDirection:Direction = res < 0 ? 'left' : 'right';
        if (child) { travel(child, node, childDirection); }
      }
      if (exist) {
        this.updateHeight(updateNode!);
        this.rotate(updateNode!)
      }
    };

    if (this.root) { travel(this.root); }
    else { return false; }

    return exist;
  }
}

// 二叉搜索树
const bsTree = new AVLTree();
bsTree.insert(4);
bsTree.insert(2);
bsTree.insert(1);
console.log(bsTree.toList())