# 类

## 实例属性初始化
不能为`null`的实例属性必须在执行构造函数的之前初始化，即以构造函数参数的语法糖进行初始化。

## 构造函数
1. 普通构造函数

2. 命名构造函数

3. 常量构造函数

4. 重定向构造函数

```dart
const double xOrigin = 0;
const double yOrigin = 0;

class Point {
  double? x;
  double? y;

  Point(double a, double b) {
    x = a;
    y = b;
  }

  // Named constructor
  Point.origin()
     : x = xOrigin,
       y = yOrigin {
         print('named Point.origin');
       }
}

void main() {
  print(Point.origin());
}
```

```dart
class Person {
  String? firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  // Person does not have a default constructor;
  // you must call super.fromJson().
  Employee.fromJson(super.data) : super.fromJson() {
    print('in Employee');
  }
}

void main() {
  var employee = Employee.fromJson({});
  print(employee);
  // Prints:
  // in Person
  // in Employee
  // Instance of 'Employee'
}
```