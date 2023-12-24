// 分治算法

import { TreeNode, bfs, createCBT, dlr, ldr } from './share'

/* -----------------------根据二叉树的前序遍历，中序遍历的结果还原二叉树------------- */

function buildTree<T=TreeNode["data"]>(dlrNodes: T[], ldrNodes: T[]):TreeNode<T>|null {
    const ldrNodesIndexMap = new Map<T, number>()
    for (let i = 0; i < ldrNodes.length; i++) {
        ldrNodesIndexMap.set(ldrNodes[i], i)
    }

    /**
     * @description 创建树节点
     * 
     * i = 当前节点在前序遍历列表中的索引
     * 
     * m = 当前节点在后续遍历列表中的索引
     * 
     * [l, r] = 表示当前节点的子节点在后续遍历列表中的索引范围
     * 
     * i + 1 = 当前节点的左子节点索引
     * 
     * m - l = 当前节点的左子节点数量
     * 
     * i + (m-l) = 当前节点的子节点
     * 
     * [l, m-1] = 当前节点的左子节点索引范围
     * 
     * [m-1, r] = 当前节点的右子节点索引范围
    */
    function dfs(i: number, l: number, r: number): TreeNode<T>|null {
        if (r < l) return null
        const root = new TreeNode<T>(dlrNodes[i])
        const m = ldrNodesIndexMap.get(dlrNodes[i])!
        root.left = dfs(i + 1, l, m - 1)
        root.right = dfs(i + (m - l) + 1, m + 1, r)
        return root
    }

    return dfs(0, 0, ldrNodes.length - 1)
}

function testBuildTree() {
    const tree = createCBT([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const dlrNodes: any[] = []
    dlr(tree, (node) => {
        dlrNodes.push(node.data)
    })
    const ldrNodes: any[] = []
    ldr(tree, (node) => {
        ldrNodes.push(node.data)
    })

    const tree2 = buildTree(dlrNodes, ldrNodes)!
    const bfsNodes: any[] = []
    bfs(tree2, (node) => {
        bfsNodes.push(node.data)
    })
    console.log(bfsNodes)
}


/* ------------------------------- 汉诺塔 ------------------------------------ */
/**
 * @description 汉诺塔
 * @param A 原始塔
 * @param B 缓存塔
 * @param C 目标塔
*/
function solveHanota(A: number[], B: number[], C: number[]) {
    function move(src: number[], tar: number[]) {
        const element = src.shift()!
        tar.unshift(element)
    }
    function dfs (n:number, src: number[], buf: number[], tar: number[]) {
        if (n === 1) {
            move(src, tar)
            return
        }
        dfs(n - 1, src, tar, buf)
        move(src, tar)
        dfs(n - 1, buf, src, tar)
    }
    dfs(A.length, A, B, C)
}
const target: number[] = []
solveHanota([1, 2, 3, 4], [], target)
console.log(target)

// function hanoi(n, A, B, C) {
//     if (n === 1) {
//       console.log(A + '->' + C);
//     } else {
//       hanoi(n-1, A, C, B);
//       console.log(A + '->' + C);
//       hanoi(n-1, B, A, C);
//     }
// }
// hanoi(3, 'A')