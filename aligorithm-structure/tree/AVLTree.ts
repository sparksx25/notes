
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
 * 具体实现需要考虑四种旋转情况:
 * 1. 右旋（左偏树）：失衡节点的左子节点A 以及 A的左子节点都存在
 * 2. 先左旋再右旋（左偏树）：失衡节点的左子节点A，A节点的右子节点存在，A节点的左子节点不存在
 * 3. 左旋（右偏树）：失衡节点的右子节点A以及 A的右子节点都存在
 * 3. 先右旋再左旋（右偏树）：失衡节点的右子节点A，A节点的左子节点存在，A的右子节点不存在
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
  private rightRotate(node: TreeNode<E>):TreeNode<E> {
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
  private leftRotate(node: TreeNode<E>):TreeNode<E> {
    const root = node.right!;
    const grandChild = root.left;
    root.left = node;
    node.right = grandChild;
    this.updateHeight(node);
    this.updateHeight(root);
    return root;
  }

  /**
   * 旋转节点
   * @param node 
   * @returns 返回旋转后子节点的根节点
   */
  private rotate(node: TreeNode<E>): TreeNode<E> {
    const factor = this.balanceFactor(node);
    // 左偏树
    if (factor > 1) {
      // 先左旋再右旋
      if (this.balanceFactor(node.left) < 0) {
        node.left = this.leftRotate(node.left!);
      }
      // 右旋
      node = this.rightRotate(node)!;
    } else if (factor < -1) {
      // 右偏树
      // 先右旋再左旋
      if (this.balanceFactor(node.right) > 0) {
        node.right = this.rightRotate(node.right!);
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

    const travel = (node: Node<E>): TreeNode<E> => {
      if (!node) return new TreeNode(data);

      const res = this.compare(data, node.data);
      if (res === 0) {
        exist = true;
        return node;
      };
      if (res < 0) {
        node.left = travel(node.left);
      } else {
        node.right = travel(node.right);
      }

      if (exist) return node;

      this.updateHeight(node);
      return this.rotate(node);
    }
    this.root = travel(this.root);

    if (exist) return false;

    this.length += 1;
    return true;
  }

  /**
   * 删除节点
   * 具体实现需要考虑：   
   * 1. 当删除节点是根节点时   
   * 2. 删除节点的度是0,1,2的情况
   * 3. 参考 insert 方法实现可能会比较简单
   * @override
   * @param data 
   */
  remove(data: E): boolean {
    let exist = false;
    const travel = (node: TreeNode<E>, parent?: Node<E>, direction?:Direction) => {
      let degree = 0;
      if (node.left) degree++;
      if (node.right) degree++;

      let updateNode: Node<E>;
      const res = this.compare(data, node.data);
      if (res === 0) {
        exist = true;
        if (degree < 2) {
          const child = node.left ? node.left : node.right;
          if (parent) { 
            parent[direction!] = child;
          } else { 
            this.root = child;
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
          updateNode = node;
        }
      } else {
        const child = res < 0 ? node.left : node.right;
        const childDirection:Direction = res < 0 ? 'left' : 'right';
        if (child) { travel(child, node, childDirection); }
      }
      if (exist && updateNode) {
        this.updateHeight(updateNode);
        parent![direction!] = this.rotate(updateNode)
      }
    };

    if (this.root) { travel(this.root); }
    else { return false; }

    return exist;
  }
}
