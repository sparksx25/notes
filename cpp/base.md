# C++ 基础

## Dir
1. 编译
2. 变量类型
3. 运算符: 运算符重载
4. 函数: 函数重载，默认参数值；函数传参数方式（传值调用，指针调用，引用调用）
5. 类: 继承，多态
6. 动态内存: new, delete
7. 命名空间 namespace
8. 模板：函数模板，类模板。模板相当于一种泛型
9. 

## 程序入口函数
```c++
#include <iostream>
#include <string>
using namespace std;

int main() {
  string name = "zeng";
  cout << "Hello World!" << "\n";
  cout << name;
  return 0;
}
```

## C++标注库
```c++
// I/O
#include <iostream>
// 数学方法
#include <cmath>
// 引入字符串类型
#include <string>
// 引入 c语言字符串操作相关的方法
# include <cstring>
// 文件操作，包含ofstream(用于创建，写操作),ifstream(用于读操作),fstream（读，写，创建）三个类
#include <fstream>
// 时间
#include <ctime>
# include <vector>
# include <list>
# include <stack>
# include <queue>
# include <deque>
# include <set>
# include <map>
// 提供 sort, find 等方法用来操作数据结构
# include <algorithm>
// 提供 srand(time(0)); 方法生成随机数
# include <cstdlib>
```

## 标准命名空间
```c++
#include <iostream>
#include <string>
#include <vector>
// using namespace std; - Remove this line

int main() {
  std::string greeting = "Hello";
  std::cout << greeting;
  return 0;
}
```


## 输入，输出
- 需要引入 `iostream` 库
- cin 将空格（空格、制表符等）视为终止字符，这意味着它只能存储一个单词（即使你输入了很多单词）
- getline (cin, fullName) 通过该方法可读取一行到字符串到 fullName 变量;


## 数据类型
- float: 最多保留 6或7位小数
- double: 最多保留15位小数
- bool: c++ 支持 bool 类型，true 表示 1， false 表示 0，最终输出的是 0, 1
- string: c++ 通过标注库支持字符串类型，也支持 c字符串数组，字符指针
- 数组: c++ 中的数组大小是固定的，不能动态添加删除元素
- 向量: 对于需要添加和删除数组元素的操作，C++ 提供了向量，这些向量是可调整大小的数组。
  
string: 
- 可以通过 "+" 操作符连接字符串
- 可以通过索引来读写字符串
- 该类型不是内置类型。C++ 中的字符串实际上是一个对象，其中包含可以对字符串执行某些操作的函数
- 通过字符串对象的 `.length()`,`.size()` 方法获取字符串的长度

```c++
#include <string>
using namespace std;
int main() {
  bool loading = true;
  bool status = 1;

  string name = "";
  string cars[] = {"Volvo", "BMW", "Ford", "Mazda"};

  // A vector with 3 elements
  vector<string> cars = {"Volvo", "BMW", "Ford"};

  // Adding another element to the vector
  cars.push_back("Tesla");
  return 0;
}

```


## 循环语句
```c++
#include <string>;
using namespace std;
int main() {
  string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
  for (string car : cars) {
    cout << car;
  }
  return 0;
}
```

## struct
```c++
struct User {
  string name;
  int age;
};
User user;

struct {
  string name;
  int age;
} user;

User student = { name}
```

## enum
```c++
enum Level {
  LOW = 1,
  MEDIUM,
  HIGH
};
num Level myVar = MEDIUM;
```


## 函数
1. 支持参数默认值
2. 函数重载是指在同一个作用域内，可以有多个函数具有相同的函数名，但参数列表不同（参数的个数、类型或顺序不同）。函数重载可以返回不同的类型，但仅返回类型不同不能作为函数重载的唯一依据。


## 类
- 成员
- 方法，内部定义，外部定义
- 构造函数, 构造函数重载，成员初始化列表, 
- 构造函数与析构函数都是特殊的成员函数
- 不能在声明时对类的数据成员进行初始化，可以使用初始化列表来初始化数据成员
- 访问标识符，public，private，protected
- 基类，派生类
- 继承，派生类也可以被继承，可以使用逗号隔离的方式同时继承分隔多个基类
- 拷贝函数
- 友元函数 friend, 类的友元函数是定义在类外部，但有权访问类的所有私有（private）成员和保护（protected）成员
- 内联函数，本质类似于函数源码调用替换。
- 指向类的指针
- 静态成员；静态函数内部没有 this

多态:
- (动态链接，或后期绑定)虚函数 是在基类中使用关键字 virtual 声明的函数。在派生类中重新定义基类中定义的虚函数时，会告诉编译器不要静态链接到该函数。
- 纯虚函数
```c++
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      virtual int sum() {
        return width + height;
      }
      // pure virtual function
      virtual int area() = 0;
};
```
  

```c++
class User {
  private:
    int sex;
  public: 
    // 数据成员
    string name;
    int age;

    // 声明方法
    void outsideDefineMethod();
    void insideDefineMethod() {
        cout << "define inside method";
    }

    // 构造函数,成员初始化列表
    User(int a): name("zeng") {
      age = a;
    }

    friend void printUser(User user);
};

void printUser(User user) {
  cout << user.sex;
}

// 在类外部定义函数
void User::outsideDefineMethod() {
  cout << "define outside method";
}
// 声明类实例
User user();

// 继承
class Student: public User {
  public:
    static int instanceCount;
}

// 初始化静态成员
int Student::instanceCount = 0;

// 构造函数
Student::Student(): User("zeng") {}
// 析构函数
Student::~Student() {}
// 拷贝函数
Student::Student(const Student &obj) {
  name = *obj.name
  age = *obj.age
}
```


## 异常
- c++ 中异常相关的有 try, catch, throw,  **没有 finally**

```c++
// 捕获特定类型的异常
try {
  throw 1;
} catch(int num){}

// 捕获任何类型的异常
try {

} catch(...){}
```

## 注意点
- 字符串不能和数字连接
- c++ 中，异常只有 try, catch, throw, **没有 finally**

```c++
string food = "Pizza";  // food variable
string &meal = food;    // reference to food
```


## STL
set: 
  - insert(), erase(), clear(), size(), empty(), 
  - 支持(for(element: elements)) 遍历 

map: 
  - 支持通过键， at() 读写值,
  - insert(), .erase(), clear(), size(), empty()
  - count(): 检查元素是否存在
  ```c++
    map<string, int, greater<string>> people = { {"John", 32}, {"Adele", 45}, {"Bo", 29} };
    for (auto person : people) {
      cout << person.first << " is: " << person.second << "\n";
    }
  ```