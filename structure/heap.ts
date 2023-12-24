// 「堆 heap」是一种满足特定条件的完全二叉树，主要可分为图 8‑1 所示的两种类型。
// ‧「大顶堆 max heap」：任意节点的值 ≥ 其子节点的值。
// ‧「小顶堆 min heap」：任意节点的值 ≤ 其子节点的值。

// 创建堆的两种方式
// 1. 将列表元素依次push到数组，每个元素 push 的时候都会自下而上堆化, 时间复杂度 𝑂(𝑛 log 𝑛)
// 2. 倒序遍历堆（即层序遍历的倒序），依次对每个非叶节点执行“从顶至底堆化”。时间复杂度 O(n)

import { TreeNode } from './share'

class MaxHeap {
    nodes: TreeNode<number>[] = []

    constructor(data: number[] = []) {
        data.forEach(item => {
            this.nodes.push(new TreeNode<number>(item))
        })
        this.sort()
    }

    // 堆的节点总数
    get size() {
        return this.nodes.length
    }

    // 获取堆顶节点, 最大值
    get root() {
        return this.nodes[0]
    }

    sort() {
        // 最后一个叶子节点的父节点是最后一个树节点
        for (let i = this.parent(this.size - 1); i >= 0; i--) {
            this.siftDown(i)            
        }
    }

    isEmpty() {
        return this.nodes.length === 0
    }

    index(index: number) {
        return this.nodes[index]
    }

    left(index: number) {
        return 2 * index + 1
    }

    right(index: number) {
        return 2 * index + 2
    }

    parent(index: number) {
        return Math.floor((index - 1) / 2)
    }

    swap(i1: number, i2: number) {
        const n1 = this.index(i1)
        const n2 = this.index(i2)
        const temp = n1.data
        n1.data = n2.data
        n2.data = temp
    }

    // 元素入堆：从堆底自下而上进行堆化
    push(data: number) {
        const node = new TreeNode<number>(data)
        const length = this.nodes.push(node)
        this.siftUp(length - 1)
    }

    // 堆顶元素出堆：从堆顶至堆底自上而下堆化
    pop() {
        if (this.size < 2) {
            this.nodes = []
            return
        }
        const last = this.nodes[this.size - 1]
        this.root.data = last.data
        this.nodes.pop()
        this.siftDown(0)
    }

    /**
     * @description 自下而上堆化
     * @param index 堆化起始节点的索引
    */
    siftUp(index: number) {
        while (index > 0) {
            const parentIndex = this.parent(index)
            const parent = this.index(parentIndex)
            const current = this.index(index)
            if (parent.data < current.data) {
                this.swap(parentIndex, index)
                index = parentIndex
            } else {
                break
            }
        }
    }

    /**
     * @description 自上而下堆化
     * @param index 堆化起始节点的索引
    */
    siftDown(index: number = 0) {
        while (this.index(index)) {
            const leftIndex = this.left(index)
            const rightIndex = this.right(index)
            const left = this.index(leftIndex)
            const right = this.index(rightIndex)
            let maxIndex = index

            if (left && this.nodes[maxIndex].data < left.data) {
                maxIndex = leftIndex
            }
            if (right && this.nodes[maxIndex].data < right.data) {
                maxIndex = rightIndex
            }

            if (index === maxIndex) break

            this.swap(index, maxIndex)
            index = maxIndex
        }
    }
}

function testMaxHeap() {
    const data = [9, 7, 8, 10,  6, 1, 5, 3, 2, 4]
    const heap = new MaxHeap(data)
    console.log(heap.nodes)
}
testMaxHeap()


// top-k 问题
function topKHeap(nums: number[], k: number) {
    nums = nums.map(n => -1 * n)
    const heap = new MaxHeap(nums.slice(0, k))
    for (let i = k; i < nums.length; i++) {
        if (nums[i] < heap.root.data) {
            heap.push(nums[i])
            heap.pop()
        }
    }
    return heap.nodes.map(node => -1 * node.data)
}

function testTopKHeap() {
    const topK = topKHeap([9, 7, 8, 10,  6, 1, 5, 3, 2, 4], 3)
    console.log(topK)
}
testTopKHeap()