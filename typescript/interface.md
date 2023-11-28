# interface

## interface 的继承
interface 继承 interface
interface 继承 type
interface 继承 class

子接口与父接口的同名属性必须是类型兼容的，不能有冲突，否则会报错。

## 接口合并
多个同名接口会合并成一个接口。
同名接口合并时，同一个属性如果有多个类型声明，彼此不能有类型冲突。


## interface 与 type
interface 与 type 的区别有下面几点。

（1）type能够表示非对象类型，而interface只能表示对象类型（包括数组、函数等）。

（2）interface可以继承其他类型，type不支持继承。