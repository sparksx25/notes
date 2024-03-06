# Sass Module

## @use
- `@use` 只能访问当前导入的文件，当前导入文件内部导入的 variable, function, mixin 是不可访问的。@forward 可访问导入的导入
- 默认的命名空间是文件名，可通过 as 重新定义命名空间
- `@use 'sass:math' as *`, 可不通过命名空间访问导入的内容
- 已`$-`,`$_`开头声明的变量是私有变量
- `@use 'library' with {}` 可初始化导入的模块变量

## @forward
- 一次性导入所有内容，包括导入文件中的引用

## @import
- 不推荐使用，没有命名空间功能
- 存在样式多次引用问题

## 私有变量
