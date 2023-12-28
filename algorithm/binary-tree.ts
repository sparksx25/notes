// 二叉树常见术语:
// 「根节点 root node」：位于二叉树顶层的节点，没有父节点。
// ‧「叶节点 leaf node」：没有子节点的节点，其两个指针均指向 None 。
// ‧「边 edge」：连接两个节点的线段，即节点引用（指针）。
// ‧ 节点所在的「层 level」：从顶至底递增，根节点所在层为 1 。
// ‧ 节点的「度 degree」：节点的子节点的数量。在二叉树中，度的取值范围是 0、1、2 。
// ‧ 二叉树的「高度 height」：从根节点到最远叶节点所经过的边的数量。
// ‧ 节点的「深度 depth」：从根节点到该节点所经过的边的数量。
// ‧ 节点的「高度 height」：从最远叶节点到该节点所经过的边的数量。

// 常见二叉树类型:
// 「完美二叉树 perfect binary tree」除了最底层外，其余所有层的节点都被完全填满。在完美二叉树中，叶节点的度为 0 ，
// 其余所有节点的度都为 2 ；若树高度为 ℎ ，则节点总数为 2ℎ+1 − 1 ，呈现标准的指数级关系，反映了自然界中常见的细胞分裂现象。

// 「完全二叉树 complete binary tree」只有最底层的节点未被填满，且最底层节点尽量靠左填充。最底层的节点靠左填充，其余层的节点全部填满

// 「完满二叉树 full binary tree」除了叶节点之外，其余所有节点都有两个子节点。

// 「平衡二叉树 balanced binary tree」中任意节点的左子树和右子树的高度之差的绝对值不超过 1 。

// 「二叉搜索树 binary search tree」

// 完全二叉树的特性：n为节点的数量，当前节点的索引为 i
// 1. 父节点的索引 Math.floor((i - 1) / 2)
// 2. 左子节点 2 * i + 1
// 3. 右子节点 2 * i + 2
// 4. 叶节点的数量 Math.floor((𝑛 + 1)/2)
// 5. 最后一个叶节点的父节点是最后一个树节点

import { TreeNode, ldr } from './share'

// 数组表示下的完全二叉树
// 插入与删除操作无规则，所以意义不大
class ArrayBinaryTree {
    nodes: TreeNode[]

    constructor(nodes: TreeNode[]) {
        this.nodes = nodes
    }

    // 左子节点
    leftNode(index: number) {
        const i = 2 * index + 1 
        return this.nodes[i]
    }

    // 右子节点
    rightNode(index: number) {
        const i = 2 * index + 2 
        return this.nodes[i]
    }

    // 父节点
    parentNode(index: number) {
        const i = Math.floor((index - 1) / 2)
        return this.nodes[i]
    }

    // 查找节点
    search() {}
}

// 二叉搜索树
class BST {
    root: TreeNode<number>|null
    constructor() {
        this.root = null
    }

    seach(data: number) {
        if (this.root === null) return
        let current: TreeNode<number>|null = this.root
        while (current) {
            if (current.data === data) break
            if (current.data < data) {
                current = current.right
            } else {
                current = current.left
            }
        }
        return current
    }

    insert(data: number) {
        if (this.root === null) {
            this.root = new TreeNode<number>(data)
            return
        }
        let current: TreeNode<number>|null = this.root
        let previous: TreeNode<number>
        while (current) {
            if (current.data === data) {
                return
            }
            previous = current
            if (current.data < data) {
                current = current.right
            } else {
                current = current.left
            }
        }
        const node = new TreeNode<number>(data)
        if (previous!.data < data) {
            previous!.right = node
        } else {
            previous!.left = node
        }
    }

    // 需要考虑删除节点的度是 0, 1, 2的情况
    remove(data: number) {
        let target: TreeNode|null = this.root
        let parent: TreeNode|null = null
        while (target) {
            if (target.data === data) break
            parent = target
            if (target.data < data) {
                target = target.right
            } else {
                target = target.left
            }
        }
        // 没有找到需要删除的节点
        if (!target) return

        if (target.degree < 2) {
            const node = target.left || target.right
            if (target === this.root) {
                this.root = node
            } else {
                if (parent!.left === target) parent!.left = node
                else parent!.right = node
            }
            return
        }

        let temp: TreeNode<number>|null = target.right!
        while(temp.left) {
            temp = temp.left
        }
        this.remove(temp.data)
        target.data = temp.data
    }

    forEach(callback: (n: TreeNode<number>) => void) {
        if (!this.root) return
        ldr(this.root, callback)
    }

    toString() {
        const data: number[] = []
        this.forEach((node) => {
            data.push(node.data)
        })
        return data.join(',')
    }
}

