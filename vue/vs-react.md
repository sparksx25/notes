# Vue vs React

- 相似之处
- 核心差异
- 编译优化
- 运行时性能
- 兼容性
- 学习曲线
- 生态
- JSX VS Template
- 使用层面: TSX, 样式，逻辑复用


## 相似之处
- 都支持响应式更新，通过数据驱动视图的更新， 组件化 (Composable) 开发。
- 使用 Virtual DOM，每次更新通过比较 Virtual DOM 的变化，更新指定的 DOM 节点。


## 核心差异
1. Vue 知道什么时候应该执行更新。Vue 对数据进行代理，它对侦测数据的变化更敏感、更精确。
2. React 推崇函数式，它直接进行局部重新渲染，这样更粗暴，但是更简单。
 但是 React 并不知道什么时候“应该去刷新”，触发局部重新变化是由开发者手动调用 setState 完成

React setState 引起局部重新刷新。为了达到更好的性能，React 暴漏给开发者 shouldComponentUpdate 这个生命周期 hook，来避免不需要的重新渲染（相比之下，Vue 由于采用依赖追踪，默认就是优化状态：你动了多少数据，就触发多少更新，不多也不少，而 React 对数据变化毫无感知）。另外 React 为了弥补不必要的更新，会对 setState 的行为进行合并操作。因此 setState 有时候会是异步更新，但并不是总是“异步”。


## 编译优化
1. 静态提升。Vue 在编译时就知道哪些节点是静态节点，节点的哪些部分发生的变化（静态提升，静态标记）。
2. React JSX 过度的灵活性导致运行时可以用于优化的信息不足
3. React 通过时间分片将复杂的更新任务进行切片，在浏览器主线程空闲时间进行重新渲染。(弥补无法以组件的粒度进行更新的缺点) 


## 运行时性能
在 React 应用中，当某个组件的状态发生变化时，它会**以该组件为根**，重新渲染整个组件子树。

如要避免不必要的子组件的重渲染，你需要在所有可能的地方使用 PureComponent，或是手动实现 shouldComponentUpdate 方法。同时你可能会需要使用不可变的数据结构来使得你的组件更容易被优化。

然而，使用 PureComponent 和 shouldComponentUpdate 时，需要保证该组件的整个子树的渲染输出都是由该组件的 props 所决定的。如果不符合这个情况，那么此类优化就会导致难以察觉的渲染结果不一致。这使得 React 中的组件优化伴随着相当的心智负担。

在 Vue 应用中，组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染。你可以理解为每一个组件都已经自动获得了 shouldComponentUpdate，并且没有上述的子树问题限制。

Vue 的这个特点使得开发者不再需要考虑此类优化，从而能够更好地专注于应用本身。


## 兼容性
1. Vue2 支持 IE9+。Vue3 不支持 IE，最低 IOS 10+
2. React 支持 IE9+。


## 学习曲线
1. vue Vue 默认使用 Template 模板语法，更接近 HTML 原生，上手较简单。同时也支持 JSX，Render 函数语法。
2. React 使用 JSX，对 JS 的掌握要求更高。


## 生态
1. Vue 的路由库和状态管理库都是由官方维护支持且与核心库同步更新的
2. React 则是选择把这些问题交给社区维护，因此创建了一个更分散的生态系统。但相对的，React 的生态系统相比 Vue 更加繁荣。


## JSX VS Template
我认为这只是「解决同一个问题的不同实现思路」，完全可以由开发者的个人偏好来决定。Vue 支持使用 JSX；JSX 也不是无法实现 Vue template 的特性，
比如模版指令，我们完全可以从工程化的角度实现
```jsx
render() {
  const list = [1, 2, 3, 4]
  return (
    <div>
      <div r-for={item in list}>
        {item}
      </div>
    </div>
  )
}
```


## 使用层面
样式隔离方案:
  1. React：CSS module, CSS in JS, BEM 命名规范
  2. Vue：官方支持 Style scoped，BEM 命名规范


SFC：
  1. Template: React 使用 JSX, Vue 默认使用 Template 语法
  2. Script: React 支持类组件，函数式组件。Vue2 使用 Options Api, Vue3 支持 Composition API，Vue 也支持函数式组件，单通常开发使用的比较少
  3. CSS: React 不对 CSS 做任何支持。 Vue 需要借用 Vue 插件编译 SFC 文件，通过 HTML 属性标记支持样式隔离


UI 复用：
  1. 在这方面，UI 层面的复用本身不是问题：因为组件化本身就是天然可组合的


逻辑复用:
  1. React 的复用主要体现在**高阶组件、render props 以及 hooks**，但是也有他们对应的不足。
      - Mixin -> Hoc-> render prop -> hooks
      - 高阶组件层级过深时容易带来 props 的命名冲突、来源不明确的问题，并且额外的组件实例会有更多的内存消耗。
      - hooks 的引入，使 React 的逻辑抽离更容易，完全修复了命名冲突，来源准确，且无额外开销，可以贯彻函数式编程的理念。
      - 但是与此同时，因为 hooks 中可能保留着组件状态，也意味着每次 React 的更新，如果不进行手动优化，不论前后数据是否有变化，每个 hook 都会重新执行，这也是底层架构上额外带来的问题。
  2. Vue 的组件复用主要是是用 **Mixin、Extend、插槽和 Vue3 的 Composition API**
      - Mixin/Extends -> slots -> Composition API
      - Mixin：它和 React 的高阶组件带来的问题十分类似，响应式数据命名冲突，以及逻辑来源不明确。
      - 插槽：主要功能点是组件复用，它解决了数据命名冲突的问题，同时数据来源准确。
      - Composition API：目前看来是较为优秀的一种逻辑复用方式，没有以上列出的所有问题，虽然和 React 的 hooks 十分相像，但是本质不同，Vue 可以追踪到数据变化，也仅在组件实例化时执行一次。


TS 支持:
  1. React 的 Tsx 的类型支持很完善
  2. Vue2 对 TS 的支持不是很友好，需要借助 vue-class-component 进行类组件开发
  3. Vue3 对 TS 的支持比较友好，借助 Volar 编辑器插件能够获得非常好的 TS 体验


组件
  1. React 支持类组件与函数式组件， v16.8 开始推荐使用函数式组件
  2. Vue2 支持 Options API 函数式组件，组件没有内部状态。Vue3 也支持函数式组件



## Reference
- [Vue官方：框架对比](https://v2.cn.vuejs.org/v2/guide/comparison.html)
- [知乎: Vue 和 React 的优点分别是什么？](https://www.zhihu.com/question/301860721)