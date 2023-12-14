# Java Getting Started

[官方开发者地址](https://dev.java/)
[JDK下载地址](https://jdk.java.net/. )

## JRE(Java Rumtime Environment )
它只包含运行 Java 应用程序所需的工具。不能使用 JRE 中提供的工具编译代码。


## JVM(Java Virtual Machine)
Java 虚拟机只是运行应用程序所涉及的 Java 软件的一部分。
Java 虚拟机直接内置于 Java 软件下载中，是 JRE 的一部分，可帮助运行 Java 应用程序。


## JDK(Java Developer's Kit)
我们通常说的Java 8，Java 11，Java 17，是指JDK的版本，也就是JVM的版本，更确切地说，就是java.exe这个程序的版本。
而每个版本的JVM，它能执行的class文件版本也不同。


## JAVA SE
Java SE（Java Platform, Standard Edition）是Java平台的标准版本


## 企业工具
J2EE、Java EE 或 Jakarta EE。所有这些首字母缩略词都是指 Java Enterprise Edition。它是一组用于创建企业级应用程序的工具和库


## classpath
`classpath`是`JVM`用到的一个环境变量，它用来指示`JVM`如何搜索`.class`字节码文件。


## Tomcat
Tomcat 是由 java 开发的。
一个 支持 Servlet API 的 Web 服务器。加载的 war 包。
启动Tomcat服务器实际上是启动Java虚拟机，执行Tomcat的main()方法，然后由Tomcat负责加载我们的.war文件，并创建一个HelloServlet实例，最后以多线程的模式来处理HTTP请求

## Javaq Bean
可以简单理解为 java 对象
bean: 描述Java的软件组件模型描述Java的软件组件模型


## jar 包
把目录打一个包，变成一个文件，一个zip格式的压缩文件，把后缀从.zip改为.jar，一个jar包就创建成功。
而jar包相当于目录。如果我们要执行一个jar包的class，就可以把jar包放到classpath中
，jar只是用于存放class的容器，它并不关心class之间的依赖


## JDBC(Java Database Connectivity)
Java 为关系数据库定义了一套标准的访问接口：JDBC
Java代码并不是直接通过TCP连接去访问数据库，而是通过JDBC接口来访问，而JDBC接口则通过JDBC驱动来实现真正对数据库的访问

使用JDBC的好处是：
- 各数据库厂商使用相同的接口，Java代码不需要针对不同数据库分别开发；
- Java程序编译期仅依赖java.sql包，不依赖具体数据库的jar包；
- 可随时替换底层数据库，访问数据库的Java代码基本不变。

缺点:
- 需要使用 JPA 提供的 SQL 语法，JPA内部将 SQL 语法转换为指定的数据库语法，
- 无法写出指定数据库的优化 SQL

## JPA
JPA就是JavaEE的一个ORM标准，它的实现其实和Hibernate没啥本质区别，但是用户如果使用JPA，那么引用的就是jakarta.persistence这个“标准”包，
而不是org.hibernate这样的第三方包。因为JPA只是接口，所以，还需要选择一个实现产品，跟JDBC接口和MySQL驱动一个道理。

## 开发注意点
- Java 类必须保存在扩展名为 .java 同名的文件中
- 始终对 char 文本使用“单引号”，对 String 文本使用“双引号”
- 字符串比较必须使用 `equals()`方法而不能用`==`
- 引用类型可以赋值为null，表示空，但基本类型不能赋值为null


## 优化
- 字符串拼接： 支持使用`+`拼接字符串。但是循环拼接使用 `StringBuilder`效果更高，避免了每次创建临时字符串对象
- 尽量使用 `Integer.valueOf` 替代 `new Integer`。