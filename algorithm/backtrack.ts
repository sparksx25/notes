// 「回溯算法 backtracking algorithm」是一种通过穷举来解决问题的方法，它的核心思想是从一个初始状态
// 出发，暴力搜索所有可能的解决方案，当遇到正确的解则将其记录，直到找到解或者尝试了所有可能的选择
// 都无法找到解为止


// 查找路径，全排列问题

import { TreeNode, createCBT } from "./share";

// 查找二叉树节点，并返回查找路径
function findNodePath<T>(root: TreeNode<T>, target: T) {
    const nodePaths: TreeNode<T>[][] = []

    function dlr(node: TreeNode<T> | null, paths: TreeNode<T>[] = []) {
        if (node === null) return

        paths.push(node)
        if (node.data === target) {
            nodePaths.push([...paths])
        }
        dlr(node.left, paths)
        dlr(node.right, paths)
        paths.pop()
    }

    dlr(root, [])
    return nodePaths
}

function testFindNodePath() {
    const tree = createCBT([1, 2, 3, 4, 3, 5, 6, 3, 7])
    const nodePaths = findNodePath<number>(tree, 3)
    console.log(nodePaths.map(paths => paths.map(node => node.data)))
}
// testFindNodePath()


// n 个不相等元素的全排列
function fullPermutation<T>(elements: T[]) {
    const gruops: T[][] = []
    const selectedIndex = Array(elements.length).fill(false)

    function permutation(state: T[]) {
        // console.log(JSON.stringify(state))
        if (state.length === elements.length) {
            gruops.push([...state])
            return
        }

        for (let i = 0; i < elements.length; i++) {
            if (!selectedIndex[i]) {
                selectedIndex[i] = true
                state.push(elements[i])
                permutation(state)
                selectedIndex[i] = false
                state.pop()
            }
        }
    }

    permutation([])
    return gruops
}

function testFullPermutation() {
    const groups = fullPermutation<string>(['A', 'B', 'C'])
    console.log(groups, groups.length)
}
// testFullPermutation()

/**
 * @description 子集和问题
 * 给定一个正整数数组 nums 和一个目标正整数 target ，请找出所有可能的组合，使得组合中的
 * 元素和等于 target 。给定数组无重复元素，每个元素可以被选取多次。请以列表形式返回这
 * 些组合，列表中不应包含重复组合。
 * @param nums 无重复元素的数组
 * @param target 目标和
 * @returns 可能的组合
*/
function subsetSumINaive(nums: number[], target: number): number[][] {
    const groups: number[][] = []

    nums.sort()

    function callback(group: number[], sum: number, start: number) {
        if (sum === target) {
            groups.push([...group])
            return
        }
        for (let i = start; i < nums.length; i++) {
            if (sum + nums[i] > target) {
                break
            }
            group.push(nums[i])
            callback(group, sum + nums[i], i)
            group.pop()
        }
    }

    callback([], 0, 0)
    return groups
}
function subsetSumINaive2(nums: number[], target: number): number[][] {
    const groups: number[][] = []

    nums.sort()

    function callback(group: number[], sum: number, start: number) {
        if (sum === 0) {
            groups.push([...group])
            return
        }
        for (let i = start; i < nums.length; i++) {
            if (sum - nums[i] < 0) {
                break
            }
            group.push(nums[i])
            callback(group, sum - nums[i], i)
            group.pop()
        }
    }

    callback([], target, 0)
    return groups
}
console.log(subsetSumINaive([1, 2, 3], 6))