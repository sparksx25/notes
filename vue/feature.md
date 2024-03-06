# Vue3 较 Vue2 的优点

兼容性:
  1. vue2 支持 IE9+，Vue3不支持 IE


性能方面的提升:
  1. 静态提升，将静态节点的创建提升到 render 函数之外，以便下次更新时复用， 减少了虚拟 DOM 节点创建的执行，加快虚拟 DOM 创建
  2. 静态标记，静态标记加快了 diff 的过程，只比对带有静态标记的节点，且知道需要比较的内容，如属性，文本
  3. 响应式优化，不会在创建组件时立即递归响应式数据，为每个键创建响应式监听，只有在访问该属性时才创建响应式监听
  3. 内存优化，使用 WeakMap 缓存响应式数据


开发层面的提升
  1. 通过 Proxy 能够更好的监听数组，对象的改变，如能够监听到数组长度的变化，对象属性的新增于删除
  2. Composition API 能够很好的提升代码复用
  3. 去除了不必要的根组件
  4. 创建的多个应用实例之间注册的插件相互独立
  6. 更友好的组件信息，`defineExpose`, `defineEmits`
  1. TS 的支持，更好的类型推断，使用 Volar 编辑器插件可以检测到 Template 模板中数据的类型

## 静态提升
vue2 每次更新时都会重新创建每个虚拟 DOM 节点。   

vue3 对于静态节点的创建，在编译时会提升到 render 函数的外部，静态节点先于组件的创建。
所以静态只会被创建一次，然后每次更新时复用静态节点。

```js
const _hoisted_1 = /*#__PURE__*/ _createVNode(
    'div',
    null,
    '共创1',
    -1 /* HOISTED */
)
const _hoisted_2 = /*#__PURE__*/ _createVNode(
    'div',
    null,
    '共创2',
    -1 /* HOISTED */
)
export function render(...) {
    return (
        _openBlock(),
        _createBlock('div', null, [
            _hoisted_1,
            _hoisted_2,
            _createVNode(
                'div',
                null,
                _toDisplayString(_ctx.name),
                1 /* TEXT */
            ),
        ])
    )
}
```


## diff算法的优化
vue2 中的虚拟dom是全量的对比。（不论DOM节点是否是静态的还是动态的，都会进行一一对比）  

vue3 新增了静态标记（patch flag）。与上次虚拟 DOM 对比时，只对比带有patch flag的节点（动态数据所在的节点）；可通过 flag 信息得知当前节点要对比的具体内容。当视图更新时，只对**动态节点部分**进行diff运算，减少了资源的损耗。

Patch flag 是个枚举，取值为1代表这个元素的文本是动态绑定的，取值为2代表元素的class是动态绑定的。


## 响应式数据的延迟监听
1. Vue3 对于使用 reactive, ref 创建的响应式数据，对于嵌套的子对象，只有当访问子对象的时候才进行依赖收集。
2. Vue2 是在组件创建或使用 set 方法时，立即递归遍历整个对象，为每个属性生成 watcher。

```typescript
function reactive(target) {
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }
  // 不会立即进行递归遍历对象的所有属性
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  proxyMap.set(target, proxy)
}
```


## 内存优化
1. 使用 WeakMap，WeakSet 缓存数据进行内存优化

```typescript
function reactive(target) {
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // target already has corresponding Proxy
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // only specific value types can be observed.
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  proxyMap.set(target, proxy)
}
```


## Composition API
1. 相比于 Vue2 的 mixin，Composition API 有更好的逻辑复用
2. 更利于代码的阅读和编写，Vue2 的选项式 API，需要跳跃的查看组件各个部分


## 能够更好的监听数组，对象的改变
1. 能够监听数组长度的变化
2. 能够监听到对象属性的新增与删除


## 去除了组件多余的根节点
1. Vue2 中组件必须要有一个根节点。有时这个根节点是多余的
2. Vue3 中组件的根节点不是必须的


## 更好的Ts支持
1. 更好的类型推断
2. 更好的类型声明，如 ref, reactive


## 按需编译，体积比vue2.x更小
1. 支持 tree-shaking

## 多个应用实例
1. 能够创建多个应用实例，每个应用实例之间注册的插件相互独立


## cacheHandlers 事件侦听器缓存
## ssr渲染
## 自定义渲染API



## Reference
- [vue3 相比 vue2 的十项优点](https://bbs.huaweicloud.com/blogs/300280)