# 使用 babel 编译与 tsc 编译 typescript的区别

## babel 特性
1. babel 是进行单文件编译，每次处理一个文件，每个编译的文件之间互不关联。
2. babel 编译 typescript 是将代码中的所有 typescript 类型全部删除。
3. 由于 babel 的单文件编译的特点，所以 babel **不支持对 typescript 进行类型检查**，与此同时也不支持 typescript
  的 enum, namespace 的跨文件合并特性
4. babel 支持 stag 阶段的提案。

## typescript 特性
1. tsc 编译器编译 typescript 是进行多文件的编译，每个文件的编译时收集的类型系统可以进行集成。
2. 因为进行的是多文件的编译，所有编译速度不如 babel。


## Reference
- [知乎：为什么说用 babel 编译 typescript 是更好的选择](https://zhuanlan.zhihu.com/p/376867546)

但是 babel 因为单文件编译的特点，做不了和 tsc 的多文件类型编译一样的效果，有几个特性不支持（主要是 namespace 的跨文件合并、导出非 const 的值），不过影响不大，整体是可用的。

babel 编译 ts 代码，相比 tsc 有很多优点：产物体积更小，支持更多特性，编译速度更快。所以用 babel 编译 typescript 是一个更好的选择。
