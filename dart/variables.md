# variables

## 变量声明标识符
- int
- double
- num: int | double
- String
- bool
- List
- Set
- Map
- Record


##

## var
`var` 声明并赋值的变量， dart静态分析器可以自动推断类型。
```dart
void main() {
  var str = 3;
  str = 'string'; // compile error
  print(str);
}
```

`var` 仅声明不赋值，该变量会被推断为动态类型。
```dart
void main() {
  var str;
  str = 4;
  str = 'string';
  print(str); // string
}
```

## dynamic/Object
`dynamic`
1. 类型是一种特殊的类型，它可以接受任何类型的值，而不需要进行类型检查。
这意味着在使用dynamic类型的变量或参数时，Dart 不会对其值进行类型检查，
而是在运行时动态地确定其类型。

2. 分析器 (analyzer) 可以推断字段，方法，局部变量和大多数泛型类型参数的类型。当分析器没有足够的信息来推断出一个特定类型时，会使用 dynamic 作为类型。

`Object`类型是所有对象的基类，它是一个通用的类型，可以用于表示任何对象类型。
在使用Object类型的变量或参数时，Dart 会对其值进行类型检查，并在运行时将其转换为适当的对象类型。



## 变量修饰符
- late: late 关键字用于声明变量或函数，但是只有在该变量或函数被**首次使用时**才进行初始化。
- final: 
- const 

## late
`late` 关键字用于声明变量或函数，但是只有在该变量或函数被**首次使用时**才进行初始化，
起到延迟初始化的作用。

```dart
String getString() {
  print('getString');
  return 'string';
}
void main() {
  late String str = getString();
  print('start');
  print(str);
}
// start
// getString
// string
```


## final
final 修饰的变量只能进行**一次赋值**操作。

- 该修饰符不能与 `var` 使用
- 实例变量可以是 `final` 但不能是 `const` 
- final 修饰的属性必须在构造函数体执行之前赋值，可使用初始化列表初始化属性

```dart
void main() {
  final String? str;
  str = 'a';
  print(str); // 'a'
  str = 'b'; // compile error
  print(str);
}
```

## const 
1. 使用`const`修饰符声明编译时常量（在编译阶段就能明确值，比如数字，字符串）。
2. 用它来创建常量值
3. 声明创建常量值的构造函数

```dart
void main() {
  String str = 'string';
  const con = str; // compile error
  print(str);
}
```

```dart
void main() {
  const list = [];
  var list2 = const [];
  print(list == list2); // true
  list.add(3); // Uncaught Error: Unsupported operation: add
}
```