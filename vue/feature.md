# Vue3 较 Vue2 的优点

## diff算法的优化
vue2 中的虚拟dom是全量的对比。（不论DOM节点是否是静态的还是动态的，都会进行一一对比）  

vue3 新增了静态标记（patch flag）。与上次虚拟 DOM 对比时，只对比带有patch flag的节点（动态数据所在的节点）；可通过flag信息得知当前节点要对比的具体内容。当视图更新时，只对**动态节点部分**进行diff运算，减少了资源的损耗。

Patch flag 是个枚举，取值为1代表这个元素的文本是动态绑定的，取值为2代表元素的class是动态绑定的。


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

## Composition API
1. 相比于 Vue2 的 mixin，Composition API 有更好的逻辑复用
2. 更利于代码的阅读和编写，Vue2 的选项式 API，需要跳跃的查看组件各个部分

## 响应式数据的延迟监听
1. Vue3 对于使用 reactive, ref 创建的响应式数据，对于嵌套的子对象，只有当访问子对象的时候才进行依赖收集。
2. Vue2 是在组件创建或使用 set 方法时，立即递归遍历整个对象，为每个属性生成 watcher。

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