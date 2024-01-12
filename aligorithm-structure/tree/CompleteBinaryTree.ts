import { BinaryTreeNode } from './BinaryTree';

/**
 * 创建完全二叉树，根据层序遍历的顺序创建节点
 * @returns 完全二叉树根节点
 */
export function createCBT<E>(list: E[]): BinaryTreeNode<E> | undefined{
  const nodes: BinaryTreeNode<E>[] = [];
  for (let i = 0; i < list.length; i++) 
  nodes[i] = new BinaryTreeNode(list[i]);

  let i = 0;
  let count = 1;
  while(count < list.length) {
    // nodes[i].left = nodes[2 * i + 1];
    // nodes[i].right = nodes[2 * i + 2];
    nodes[i].left = nodes[count + 0];
    nodes[i].right = nodes[count + 1];
    i += 1;
    count += 2;
  }
  return nodes[0]
}

/**
 * 任意二叉树转数组表示   
 * 完全二叉树的层序遍历顺序等于数组中元素索引的位置
 * 完全二叉树适合使用数组表示
 * @param root 
 */
export function binaryTree2Array<E>(root: BinaryTreeNode<E>): (E|undefined)[] {
  type NodeEl = BinaryTreeNode<E>|undefined;

  let list: (E|undefined)[] = [];
  function travel(levelNodes: NodeEl[]) {
    const queue: NodeEl[] = [];
    let childIndex = 0;
    for (let i = 0; i < levelNodes.length; i++) {
      const node = levelNodes[i];
      list.push(node?.data);

      queue.push(node?.left);
      queue.push(node?.right);
      if (node?.left) {
        childIndex = i * 2 + 1;
      }
      if (node?.right) {
        childIndex = i * 2 + 2;
      }
    }
    if (childIndex) {
      travel(queue);
    }
  }
  travel([root])

  return list;
}