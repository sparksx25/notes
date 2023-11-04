

## 类型
`num`: 包含 `int`, `double` 类型
`Object`: 
`dynamic`: 表示任意类型

```dart
// Map 类型
Map<String, dynamic> map = {'argA': 'hello', 'argB': 42};

// 类型推断
var arguments = {'argA': 'hello', 'argB': 42}; // Map<String, Object>
```


## 关键子
`is`: 类型相等比较
`is!`: 类型不相等比较
`as`: 类型转换
`with`: mixin 操作
`typedef`: 类型别名
`void`: 声明函数无返回值

```dart
print(names is List<String>); // true
```


## Widgets

```dart
class ComponentElement {
    void update() {
        build()
    }
}
class StatelessElement extends ComponentElement {
  Widget build() => (widget as StatelessWidget).build(this);
}
class StatefulElement extends ComponentElement {
  Widget build() => state.build(this);
}

class State {
  void setState(VoidCallback fn)
  Widget build(BuildContext context);
}


class Widget {
    final String? key
    Element createElement()
}
class StateLessWidget extends Widget {
    StatelessElement createElement() => StatelessElement(this);
    Widget build(BuildContext context);
}
class StatefulWidget extends Widget {
    StatefulElement createElement() => StatefulElement(this);
    // State 的 build 方法返回 widget
    State createState()
}
// Widget.createElement() -> build
```

## 注意点
- 只能使用 const 类型的类创建 MetaData

- const 类型的类的构造函数不能有函数体

- 注解本身不会影响程序的执行。它们仅作为元数据提供给编译器、静态分析工具或运行时反射API。
要利用注解实现某些功能，我们需要使用这些工具来读取和处理注解。

- 可以使用 value! 符号表示变量不为 null

- 实例变量可以是 final 但不能 const 。

- const 关键字不仅用于**声明常量变量**。还可以使用它来**创建常量值**，以及**声明创建常量值的构造函数**。任何变量都可以具有常量值。
- 虽然 final 对象不能修改，但其字段可以更改。相比之下， const 对象及其字段是无法更改的：它们是不可变的。



