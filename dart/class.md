# 类

## 普通构造函数
不为`null`的实例属性必须在执行构造函数的之前初始化，即以构造函数参数的语法糖进行初始化。
```dart
const double xOrigin = 0;
const double yOrigin = 0;

class Point {
  double x;
  doubley;

  Point(this.x, this.y);

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

## 命名构造函数
构造函数实例属性初始化
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

## 调用没有默认构造函数的超类
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

## 超类参数
```dart
class Vector2d {
  final double x;
  final double y;

  Vector2d(this.x, this.y);
}

class Vector3d extends Vector2d {
  final double z;

  // Forward the x and y parameters to the default super constructor like:
  // Vector3d(final double x, final double y, this.z) : super(x, y);
  Vector3d(super.x, super.y, this.z);
}
```

## 重定向构造函数
```dart
class Point {
  double x, y;

  // The main constructor for this class.
  Point(this.x, this.y);

  // Delegates to the main constructor.
  Point.alongXAxis(double x) : this(x, 0);
}
```

## 常量构造函数
```dart
class ImmutablePoint {
  static const ImmutablePoint origin = ImmutablePoint(0, 0);

  final double x, y;

  const ImmutablePoint(this.x, this.y);
}
```
TODO:
常量构造函数并不总是创建常量
