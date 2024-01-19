import { BinaryTreeNode } from '../../aligorithm-structure/tree/BinaryTree';

function restoreBinaryTree(dlrList: number[], ldrList: number[]) {
  const indexMap = new Map<number, number>();
  for (let i = 0; i < ldrList.length; i++) {
    indexMap.set(ldrList[i], i);
  }
  /**
   * @param i 当前构建节点在前序遍历中的索引
   */
  function travel(i: number, l: number, r: number) {
    const root = new BinaryTreeNode(dlrList[i]);
    root.left = travel(i + 1)
    return root;
  }
  travel(0, 1, ldrList.length - 1);
}