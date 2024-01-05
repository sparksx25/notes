class BinaryTreeNode<E> {
  constructor(
    public data: E,
    public left?: BinaryTreeNode<E>,
    public right?: BinaryTreeNode<E>
  ) {}
}

abstract class BinaryTree<E> {
  abstract size(): number;
}


/**
 * 创建完全二叉树，将数组中的元素按层序遍历的顺序存储
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
 * @param root 
 */
export function binaryTree2Array<E>(root: BinaryTreeNode<E>): (BinaryTreeNode<E>|undefined)[] {
  let list: (BinaryTreeNode<E>|undefined)[] = [];
  function travel(levelNodes: BinaryTreeNode<E>[]) {
    for (let i = 0; i < levelNodes.length; i++) {
      list.push(levelNodes[i]);
    }
  }
  travel([root])
  return list;
}



//---------------------------深度优先搜索----------------------------
type TravelCb<E> = (node: E, level: number) => any;
/**
 * 前序遍历（Degree-Left-Right）
 * @param root 根节点
 * @param cb 回调参数接收（节点数据，节点层级）两个参数，根节点层数是1, 若返回 false 则停止遍历
*/
export function dlr<E>(root: BinaryTreeNode<E>, cb: TravelCb<E>) {
  let stop = false;
  function travel (node: BinaryTreeNode<E> | undefined, level: number) {
    if (!node) return;
    if (stop === true) return;

    stop = cb(node.data, level) === false;
    travel(node.left, level + 1);
    travel(node.right, level + 1);
  }
  travel(root, 1);
}
/**
 * 中序遍历（Left-Degree-Right）
 * @param root 根节点
 * @param cb 回调参数接收（节点数据，节点层级）两个参数，根节点层数是1, 若返回 false 则停止遍历
*/
export function ldr<E>(root: BinaryTreeNode<E>, cb: TravelCb<E>) {
  let stop = false;
  function travel (node: BinaryTreeNode<E> | undefined, level: number) {
    if (!node) return;
    if (stop === true) return;

    travel(node.left, level + 1);
    stop = cb(node.data, level) === false;
    travel(node.right, level + 1);
  }
  travel(root, 1);
}
/**
 * 后序序遍历（Left-Right-Degree）
 * @param root 根节点
 * @param cb 回调参数接收（节点数据，节点层级）两个参数，根节点层数是1, 若返回 false 则停止遍历
*/
export function lrd<E>(root: BinaryTreeNode<E>, cb: TravelCb<E>) {
  let stop = false;
  function travel (node: BinaryTreeNode<E> | undefined, level: number) {
    if (!node) return;
    if (stop === true) return;

    travel(node.left, level + 1);
    travel(node.right, level + 1);
    stop = cb(node.data, level) === false;
  }
  travel(root, 1);
}


//---------------------------广度优先搜索----------------------------
/**
 * 广度优先搜索原型
 * @param root 
 * @returns 
 */
export function bfsPrototype <E> (root: BinaryTreeNode<E>) {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift()!
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}
/**
 * 广度优先搜索（breadth first search）
 * @param root 根节点
 * @param cb 回调参数接收（节点数据，节点层级）两个参数，根节点层数是1, 若返回 false 则停止遍历
*/
export function bfs<E>(root: BinaryTreeNode<E>, cb: TravelCb<E>) {
  const queue: [BinaryTreeNode<E>, number][] = [[root, 1]];
  let index = 0;
  while (index < queue.length) {
    const [node, level] = queue[index];
    index += 1;
    if (cb(node.data, level) === false) return;
    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }
}