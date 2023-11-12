# zshell
> 所有 shell 都有“启动”文件，其中包含在 shell 启动后立即执行的命令,zsh 允许每个用户拥有自己的启动文件。


## 参考文件
(全面: zsh shell介绍)[https://zsh.sourceforge.io/Guide/zshguide.html]


## 交互式 shell与 登录 shell
1. 交互式 shell 是用户在终端中与系统交互时使用的命令行界面。当您打开终端应用程序时，您将自动进入交互式 shell。在交互式 shell 中，您可以输入命令并接收系统的即时响应。

2. 登录 shell 是在用户登录系统时启动的命令行界面。登录 shell 通常用于设置系统环境变量、运行脚本和执行其他系统级任务

## 启动文件
/ect:  系统层面的启动文件
～/: 用户层面的启动文件

/etc/zshenv
~/.zshenv
/etc/profile
~/.zprofile
/etc/zshrc
~/.zshrc
/etc/zlogin
~/.zlogin



## 命令
logout
用于退出登录 shell

exit
退出 shell，适用于所有 shell


## 内置变量
- 
用户访问的上一个目录

～
用户主目录

$HOME
用户主目录

$PATH, $path
查看环境变量

$ZSH_VERSION



## 自定义变量
1. 声明变量 `=`两边不能出现空格，多个字符使用引号包裹。
foo='This is a parameter.'

2. 读取变量时需要加上 $前缀
print $foo

3. 引号
- 单引号用来表示一个字符串整体
- 双引号用来解析单引号这个整体所表示的变量值

4. --
`--` 表示当前的命令没有可选参数

```shell
foo='This is a parameter.'
print '$foo:"'$foo'"'
```

## 定义数组
索引从1开始，元素之间通过空格区分，
```shell
foo=('first element' 'second element')
print -- ${foo[2]} // first element
```


## 设置环境变量
在交互式 shell 中设置环境变量，$HOME/.zshrc



## shell

Z shell (zsh)

Bash

C shell (csh) 是一种 Unix shell，虽然 C shell 曾经是一种流行的 Unix shell，但它现在已经被其他 shell（如 Bash 和 Zsh）所取代，因为它们提供了更强大的功能和更好的用户体验。
在 Mac 上，C shell 通常不是默认安装的，但您可以通过安装 Xcode 开发工具包来获得它。如果您想使用 C shell，您可以在终端中输入 csh 命令来启动它。

Korn shell（ksh）是一种 Unix shell 的语法类似于 C 编程语言，因此它被称为 Korn shell。Korn shell 提供了一些高级功能，例如命令别名、历史记录、命令行编辑和作业控制。但它现在已经被其他 shell（如 Bash 和 Zsh）所取代，因为它们提供了更强大的功能和更好的用户体验。

