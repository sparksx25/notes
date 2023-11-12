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

## 注意点
- 多子节字符处理使用 `characters.dart`库
- 不要使用 runtimeType 判断对象的类型，使用 `is` 操作符





