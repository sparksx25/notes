# 操作符

## 符号
`??` ： 空值合并
`??=` ：逻辑空赋值
`?.` ： 可选链式
```dart
void main() {
  int? num;
  num = null ?? 2;
  print(num); // 2

  double? dou;
  dou ??= 3.14;
  print(dou); // 3.14

  String? str;
  print(str?.toUpperCase()); // null
}
```


## 类型检查操作符
`as`: 帮助dart静态分析器推断类型

`is!`: `is`操作符的结果取反

`is`: 类型检查
```dart
void main() {
  int? num;
  print(num is int); // false
}
```

## 特殊操作符
`!`：1. null值断言 2. boolean转换

`..`：级连操作符，返回 this

`...`：拓展操作符，可用于集合(List, Set, Map)