# 基本类型

## object
object 类型包含了所有对象、数组和函数


## Object
大写的Object类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是Object类型，这囊括了几乎所有的值。
事实上，除了undefined和null这两个值不能转为对象，其他任何值都可以赋值给Object类型。


## undefined 和 null
undefined和null既是值，又是类型。


## 交叉类型
交叉类型A&B表示，任何一个类型必须同时属于A和B，才属于交叉类型A&B，即交叉类型同时满足A和B的特征。
交叉类型常常用来为对象类型添加新属性。


## Function
TypeScript 提供 Function 类型表示函数，任何函数都属于这个类型。

## 元组