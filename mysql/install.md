# windows mysql 安装

## 安装流程
- 下载软件包[mysql 下载地址](https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.34-winx64.zip)

- 配置数据库目录 mysql软件包根目录新建 my.ini 文件，配置 mysql 服务
  ```
    [mysqld]
    # 设置mysql安装目录
    basedir=E:\mysql\mysql-8.0.34-winx64
    # 设置数据库存放目录
    datadir=E:\mysql\mysql-8.0.34-winx64\database
  ```


- 初始化 mysql 数据库, 生成用户名，临时密码     
  执行生成临时账号的命令 `mysqld --initialize --console`
  记住生成的临时用户名和密码
  

- 注册 windows 服务，以便以 windows 的命令行启动 mysql 服务器。     
  执行注册windows服务命令 `mysqld -install`
  启动服务 `net  start mysql`
  停止服务 `net  stop mysql`

## mysqld(MySQL Server Daemon)
mysqld 是 MySQL 服务器的主要进程，它负责管理数据库、处理并发连接、执行查询、存储数据等核心功能。当你启动 MySQL 服务器时，实际上就是运行 mysqld 可执行文件。  


## 设置字符集
修改 my.ini 以设置字符集。
设置字符集之后需要重新启动mysql服务。
```
[mysqld]
# set basedir to your installation path
basedir=E:\mysql\mysql-8.0.34-winx64
# set datadir to the location of your data directory
datadir=E:\mysql\mysql-8.0.34-winx64\database

character-set-server=utf8

[client]
default-character-set = utf8
``` 

## 参考地址
[参考地址: 知乎](https://zhuanlan.zhihu.com/p/649709377?utm_id=0)
[mysql 官网](https://dev.mysql.com/doc/refman/8.0/en/windows-extract-archive.html)