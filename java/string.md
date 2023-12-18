# String

Java中，String是一个引用类型，它本身也是一个class

始终对 char 文本使用“单引号”，对 String 文本使用“双引号”

字符串比较必须使用 `equals()`方法而不能用`==`

## 其他类型转字符串
String.valueOf()

## 字符串转其他类型
Integer.parseInt()
Boolean.parseBoolean

## CharAt
引号访问字符


## StringBuilder
- StringBuilder 高效操作字符串。
- 支持使用`+`拼接字符串。但是循环拼接使用 `StringBuilder`效果更高，避免了每次创建临时字符串对象

StringBuilder和StringBuffer接口完全相同，现在完全没有必要使用StringBuffer。

## StringJoiner
使用指定分隔符拼接字符串。或者使用 String.join()

## 多行字符串的表示
```java
String str = "line1 \n"
              + "line2 \n";

String s = """
  line1
  line2
"""

```