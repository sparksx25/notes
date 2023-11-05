# 基本类型

## 内置类型
- Numbers (int, double)
- Strings (String)
- Booleans (bool)
- Records ((value1, value2))
- Lists (List, also known as arrays)
- Sets (Set)
- Maps (Map)
- Runes (Runes; often replaced by the characters API)
- Symbols (Symbol)
- The value null (Null)

## Record
Record 声明的变量是不可修改的，仅作为一个记录。
```dart
void main() {
  var record = ('first', a: 2, b: true, 'last');
  // 其中 a 和 b 是命名字段，值first与last是作为位置字段的值。
  print(record.$1); // Prints 'first'
  print(record.a); // Prints 2
  print(record.b); // Prints true
  print(record.$2); // Prints 'last'
}
```dart
