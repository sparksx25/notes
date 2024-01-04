// TODO:
// typescript Boolish

export class BinaryTreeNode<E> {
  constructor(
    public data: E,
    public left?: BinaryTreeNode<E>,
    public right?: BinaryTreeNode<E>
  ) {}
}

export abstract class BinaryTree<E> {
  // 获取有效节点数
  abstract size(): number;

}


/**
 * 创建完全二叉树，数组中的元素按层序遍历的顺序存储
 * @returns 完全二叉树根节点
 */
function createCBT<E>(list: E[]): BinaryTreeNode<E> | undefined{
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

type TravelCb<E> = (node: E, level: number) => any;

// 前序遍历（Degree-Left-Right）
function dlr<E>(root: BinaryTreeNode<E>, cb: TravelCb<E>) {
  let node = root;
  while(node) {
    
  }
}
