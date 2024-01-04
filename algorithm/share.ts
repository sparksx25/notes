export type EachNode = TreeNode[] | ((node: TreeNode) => void)

export class TreeNode<Data = any> {
  data: Data
  left: TreeNode<Data> | null = null
  right: TreeNode<Data> | null = null
  constructor(data?: Data) {
    this.data = data as Data
  }

  // 获取节点的度
  get degree() {
    let degree = 0;
    if (this.left) degree += 1
    if (this.right) degree += 1
    return degree
  }
}

// 广度优先遍历-循环
export function bfs(root: TreeNode, callback: EachNode = []): void {
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const node: TreeNode = queue.shift()!
    Array.isArray(callback) ? callback.push(node) : callback(node)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
}

// 广度优先遍历-递归
export function bfs2(root: TreeNode) {
  const nodes: TreeNode[] = []

  function callback(levelNodes: TreeNode[]) {
    if (levelNodes.length === 0) return

    const queue: TreeNode[] = []
    for (let i = 0; i < levelNodes.length; i++) {
      const node = levelNodes[i]
      nodes.push(node)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    callback(queue)
  }

  callback([root])
  return nodes
}

// 深度遍历: 前序遍历（DLR）中序遍历（LDR）后序遍历（LRD）
export function dlr(node: TreeNode | null, callback: (n: TreeNode) => void) {
  if (node === null) return
  callback(node)
  dlr(node.left, callback)
  dlr(node.right, callback)
}
export function ldr(node: TreeNode | null, callback: (n: TreeNode) => void) {
  if (node === null) return
  ldr(node.left, callback)
  callback(node)
  ldr(node.right, callback)
}
export function lrd(node: TreeNode | null, callback: (n: TreeNode) => void) {
  if (node === null) return
  lrd(node.left, callback)
  lrd(node.right, callback)
  callback(node)
}

// 创建完全二叉树
export function createCBT<T = any>(data: T[]): TreeNode<T> {
  const nodes: TreeNode[] = []
  for (let i = 0; i < data.length; i++) {
    nodes.push(new TreeNode<T>(data[i]))
  }
  let index = 1
  for (let i = 0; index < nodes.length; i++) {
    nodes[i].left = nodes[index + 0] || null
    nodes[i].right = nodes[index + 1] || null
    index += 2
  }
  return nodes[0]
}

// 任意二叉树的数组表示,使用 null 构造完全二叉树
export function binaryTree2Array(root: TreeNode) {
  type Nodes = Array<TreeNode | null>
  const nodes: Nodes = []
  function callback(levelNodes: Nodes) {
    const queue: Nodes = []
    let isLeafLevel = true
    for (let i = 0; i < levelNodes.length; i++) {
      const node = levelNodes[i]
      nodes.push(node)
      if (node) {
        if (node.left || node.right) {
          isLeafLevel = false
        }
        queue.push(node.left)
        queue.push(node.right)
      } else {
        queue.push(null, null)
      }
    }
    if (!isLeafLevel) callback(queue)
  }
  callback([root])

  let index = nodes.length
  for (let i = nodes.length - 1; i >= 0; i--) {
    if (nodes[i]) {
      index = i + 1
      break
    }
  }
  return nodes.slice(0, index)
}