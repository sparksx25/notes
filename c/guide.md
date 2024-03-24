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
- 整数——可以是正数或负数的整数。使用char、short、int、long或long long来定义。
- 无符号整数——只能是正数的整数。使用unsigned char、unsigned int、unsigned short、unsigned long或unsigned long long定义。
- 浮点数——实数（带小数的数字）。使用float和double来定义。
- C语言**没有**布尔类型
- C语言使用字符数组来定义字符串,(字符数组的长度需要+1，或者让编译器自动计算)

- 字符变量 `char letter = 'a';`
- 字符串变量 `char str = "strings";`
- 符号常量 是预编译指令，编译之后会被替换 `# define PI 3.1415`
- 常变量 `const int num = 99;`
- 强制类型转换 `(double) a;`

int
```c
float pi = 3.1415f;
long double pi = 3.1415L;
unsigned int a = 1;
```
  
Array
```c
int numbers[10];
// 初始化二维数组
int a[3][4] = {  
   {0, 1, 2, 3} ,   /*  初始化索引为0的行 */
   {4, 5, 6, 7} ,   /*  初始化索引为1的行 */
   {8, 9, 10, 11}   /*  初始化索引为2的行 */
};
int a[][4] = {0,1,2,3,4,5,6,7,8,9,10,11};
char letters[10]; // 字符数组
```

String
```c
char letter = 'A';
char letter = 65;
```

Strings: 字符串
1. C 语言中的字符串实际上是字符数组。
2. 可以使用指向字符数组的**指针**来定义简单的字符串，支持该字符数组只能读不能写。`char * name = "John Smith";`
3. 声明可读取的字符数组。`char name[] = "John Smith";`
4. 单引号表示单个字符，双引号表示字符串
5. 字符常量不能赋值给字符变量
6. 字符数组的长度不是很重要，依靠 "\0" 判断字符串的结束

```c
`char name[] = {"John Smith"}`
`char name2[] = "John Smith";`
```

## 关键字
static:
  1. 静态变量: 可以延长变量的生命周期。静态变量不会被重新初始化，函数运行结束不会销毁。
  2. 静态函数



## 运算符
逻辑运算符 `&&` `||` `!`
sizeof: 求字节数运算符

## 循环
for, while

## 函数
- printf
- sprintf(var, format, ...): 格式化赋值，将输出的值重定向到变量 var 中
- strlen(str): 返回字符串的有效长度，不包含 "\0"
- strncmp(str1, str2, len): 如果相同，返回数字0；如果不同，返回其他数字
- strncat(desc, str, len): 将指定长度的 str 字符拷贝到 desc 字符数组
- strcat(str1, str2): 连接
- strcpy,strncpy: 复制
- strlwr(): 转小写
- strupr(): 转小写
- sizeof(): 求字节，可以对一个类型求字节
- malloc(字节长度):动态分配内存
- free(var): 释放内存

```c
#include <stdio.h>
#include <string.h>
#include <math.h>
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

## Pointer
1. 指针本质上是一个简单的**整数变量**，它**保存指向值的内存地址**，而不是保存实际值本身
2. 可以通过 `&` 符号获取一个变量所对应的内存地址。
3. 可以通过 `*` 符号获取这个指针所对应的值。

```c
int a = 1;
int * pointer_to_a = &a;
a += 1;
*pointer_to_a += 1;
printf("The value of a is now %d\n", a); // 3
```

## 库
stdio
1. printf: 遇到 "\0" 字符结束输出
2. sprintf
3. putchar

```c
char a = getchar();
putchar(a);
printf("%c", a);
printf("%12d\n", 1); // "         345"
```

## QUESTION
1. 字符常量不能复制给字符数组
```c
void main() {
  char name[100];
  name[0] = "A";
  // error: "A" 是 `const char *` 类型，不能复制给可修改的字符数组
  printf("%s", name);
}
```


## FAQ
1. 数组不需要取地址符
2. 字符串以 "\0" 字符作为结束
3. 变量最好在声明时就赋值，否则可能会使用该内存之前未清理的值
4. C 语言的变量作用域主要有两种：文件作用域（file scope）和块作用域（block scope）。