# dart

- [变量的声明](./variables.md)
- [操作符](./operators.md)

## 类型
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
- 多子节字符处理使用 `characters.dart`库
- 不要使用 runtimeType 判断对象的类型，使用 `is` 操作符





