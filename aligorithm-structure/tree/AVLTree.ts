
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
class AVLTree<E> extends BinarySearchTree<E> {
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
  private rightRotate(node: Node<E>) {
    if (!node) return;
    const child = node.left!;
    const grandChild = child.right;
    child.right = node;
    node.left = grandChild;
    this.updateHeight(node);
    this.updateHeight(child);
  }

  private rotate(node: TreeNode<E>) {
    const factor = this.balanceFactor(node);
    // 左偏树
    if (factor > 1) {
      // 右旋
      if (this.balanceFactor(node.left) >= 0) {
        this.rightRotate(node);
      } else {
        
      }
    }
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

    function travel(node: TreeNode<E>) {
      if (exist) return;
      const res = this.compare(data, node.data);
      if (res === 0) {
        exist = true;
        return;
      };
      const child = res < 0 ? node.left : node.right;
      const direction:Direction = res < 0 ? 'left' : 'right';

      if (child) {
        travel(child);
      } else {
        node[direction] = new TreeNode(data);
      }
      this.updateHeight(node);
      this.rotate(node);
    }

    if (this.root) {
      travel(this.root)
      return !exist;
    }

    this.root = new TreeNode(data);
    this.length += 1;
    return true;
  }

  /**
   * @override
   * @param data 
   */
  remove(data: E): boolean {
      
  }
}