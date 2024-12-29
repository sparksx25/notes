# guide

## 根据状态设置元素样式
- [根据状态设置元素样式](./hover-group-peer.md)

## 响应式设计
1. 移动端优先
2. 支持设置在某个范围内生效的类样式

## 深色模式
1. 支持根据类样式进行手动切换肤色，或者根据系统偏好设置进行肤色切换

## 样式重用
1. 封装组件
2. 使用 `@layer` 提取公共样式
```
@layer components {
  .btn-primary {
    @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
  }
}
```

## 添加自定义样式
1. 通过 tailwind.config.js 添加或修改自定义类样式
2. 使用任意值
```html
<div class="top-[117px]">
</div>
<div class="bg-[--my-color]">
</div>
<div class="grid grid-cols-[fit-content(theme(spacing.32))]">
</div>
```
3. 使用指令自定义样式,该 @layer 指令通过自动将样式重新定位到相应的 @tailwind 指令来帮助您控制声明顺序，并且还为您自己的自定义 CSS **启用修饰符和摇树**等功能
4. 可以通过`.css`文件或插件添加自定义类样式

## 指令
1. 决定样式，base, component, utilities 样式的顺序，是否生成某个类样式
2. 指令中定义的样式支持使用修饰符

## 样式扫描
1. 支持设置样式生成的白名单和黑名单，显示声明需要生成的类名，或不生成的类名


## 样式特殊符号处理
- [样式特殊符号处理](./symbol.md)
