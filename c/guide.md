# GUIDE

## main
- `main` 方法是主函数
- `main` 方法返回 0 表示程序执行成功
```c
// 引入标准输入输出库，提供如 printf 函数
#include <stdio.h>
#include <string.h>

int main() {
  printf("Hello, World!");
  return 0;
}
```

## 类型
- 整数——可以是正数或负数的整数。使用char、int、short、long或long long来定义。
- 无符号整数——只能是正数的整数。使用unsigned char、unsigned int、unsigned short、unsigned long或unsigned long long定义。
- 浮点数——实数（带小数的数字）。使用float和double来定义。
- C语言**没有**布尔类型
- C语言使用字符数组来定义字符串,(字符数组的长度需要+1，或者让编译器自动计算)
  
```c
int numbers[10];

// 初始化二维数组
int a[3][4] = {  
   {0, 1, 2, 3} ,   /*  初始化索引为0的行 */
   {4, 5, 6, 7} ,   /*  初始化索引为1的行 */
   {8, 9, 10, 11}   /*  初始化索引为2的行 */
};
int a[3][4] = {0,1,2,3,4,5,6,7,8,9,10,11};

// 这个方法创建了一个只能读取的字符串
char * name = "John Smith";
// 可以被操作的字符串，需要定义为一个字符数组
char name[] = "John Smith";
// 一个特殊的char（等于0）表示字符串的结束，所以字符串的长度需要加1
```

## 运算符
逻辑运算符 `&&` `||` `!`

## 输入输出
```c
printf("%s is %d years old.\n", name, age);
// 格式化赋值，将输出的值重定向到字符数组 name 中
sprintf(name, "%s %s", first_name, last_name);
```

## 函数
- strlen(str): 返回字符串的长度
- strncmp(str1, str2, len): 如果相同，返回数字0；如果不同，返回其他数字
- strncat(desc, str, len): 将指定长度的 str 字符拷贝到 desc 字符数组

```c
#include <stdio.h>
#include <string.h>
int main() {
  char * first_name = "Hello";
  char last_name[] = "World";
  char name[100] = "A";

  strncat(name, first_name, strlen(first_name));
  printf("%s", name);
  printf("\n%s", first_name);
  return 0;
}
// AHello
// Hello
```


## QUESTION
字符常量不能复制给字符数组？
```c
void main() {
  char name[100];
  name[0] = "A";
  // error: "A" 是 `const char *` 类型，不能复制给可修改的字符数组
  printf("%s", name);
}
```