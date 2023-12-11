# Variable

## 八种原始数据类
byte:   
值的范围为[-128, 127]

short:
值的范围 [-32768, 32,767]

int:
值的范围 [ -2^31, 2^31 - 1]

long
值的范围 [ -2^64, 2^64 - 1]

float 
32

double
64

boolean

char
char 数据类型为单个 16 位 Unicode 字符,范围[0, 65535]


## String: 
Java 为字符串提供特殊支持。
String 对象是不可变的，这意味着一旦创建，它们的值就无法更改。


## 数组
```java
String[][] names = {
  {"Mr. ", "Mrs. ", "Ms. "},
  {"Smith", "Jones"}
};
```

## var 声明变量
- 只能将其用于在方法、构造函数和初始值设定项块中声明的局部变量
- var 不能用于字段，不能用于方法或构造函数参数。
- var 声明的变量需要在声明时进行赋值以确定类型


## 变量修饰符
final

## 类修饰符
static


## 类型判断
instanceof