# 算法

[github hello-algorithm 算法](https://github.com/geekxh/hello-algorithm)
[github hello-algo](https://github.com/krahets/hello-algo/releases)


## 算法评估

时间效率：算法运行速度的快慢。
空间效率：算法占用内存空间的大小。

时间复杂度由多项式 𝑇(𝑛) 中最高阶的项来决定。


𝑂(1) < 𝑂(log 𝑛) < 𝑂(𝑛) < 𝑂(𝑛 log 𝑛) < 𝑂(𝑛2) < 𝑂(2𝑛) < 𝑂(𝑛!)
常数阶 < 对数阶 < 线性阶 < 线性对数阶 < 平方阶 < 指数阶 < 阶乘阶

通常使用最差时间复杂度作为算法效率的评判标准

## 搜索
二分查找：针对有序的数据结构
双指针


## 排序

## 分治

## 回溯

## 动态规划

## 贪心算法
货币找零



## 案例
斐波那契数列


## 迭代
从指定位置开始遍历全部元素
```typescript
function forEachFromStart(list: any[], start: number){
  for (let i = 0; i < list.length; i++) {
    const item = list[(start + i) % list.length];
  }
}
```



## 二叉树
### 二叉树常见术语:
- 「根节点 root node」：位于二叉树顶层的节点，没有父节点。
- 「叶节点 leaf node」：没有子节点的节点，其两个指针均指向 None 。
- 「边 edge」：连接两个节点的线段，即节点引用（指针）。
- 节点所在的「层 level」：从顶至底递增，根节点所在层为 1 。
- 节点的「度 degree」：节点的子节点的数量。在二叉树中，度的取值范围是 0、1、2 。
- 二叉树的「高度 height」：从根节点到最远叶节点所经过的边的数量。
- 节点的「深度 depth」：从根节点到该节点所经过的边的数量。
- 节点的「高度 height」：从最远叶节点到该节点所经过的边的数量。

### 常见二叉树类型:
- 「完美二叉树 perfect binary tree」除了最底层外，其余所有层的节点都被完全填满。在完美二叉树中，叶节点的度为 0 ，
其余所有节点的度都为 2 ；若树高度为 ℎ ，则节点总数为 2ℎ+1 − 1 ，呈现标准的指数级关系，反映了自然界中常见的细胞分裂现象。

- 「完全二叉树 complete binary tree」只有最底层的节点未被填满，且最底层节点尽量靠左填充。最底层的节点靠左填充，其余层的节点全部填满

- 「完满二叉树 full binary tree」除了叶节点之外，其余所有节点都有两个子节点。

- 「平衡二叉树 balanced binary tree」中任意节点的左子树和右子树的高度之差的绝对值不超过 1 。

- 「二叉搜索树 binary search tree」

### 完全二叉树的特性：n 为节点的数量，i 为当前节点的索引
- 父节点的索引 Math.floor((i - 1) / 2)
- 左子节点 2 * i + 1
- 右子节点 2 * i + 2
- 叶节点的数量 Math.floor((𝑛 + 1)/2)
- 最后一个叶节点的父节点是最后一个树节点


## CODE
- [二叉树](./binary-tree.ts)
- [堆](./heap.ts)
- [图](./graph.ts)
- [二分查找](./binary-search.ts)