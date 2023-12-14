# java 常用包


## org.springframework:spring-context
提供 IoC 容器

## org.springframework:spring-jdbc
jdbc为操作数据库提供了一套模板方法，避免了写 try 语句释放连接资源


## jakarta.annotation:jakarta.annotation-api
提供 java 注解


## spring-boot-devtools
自动重启服务开发工具



## org.hsqldb:hsqldb
编写示例代码或者测试代码时，可以使用HSQLDB这个数据库，它是一个用Java编写的关系数据库，
可以以内存模式或者文件模式运行，本身只有一个jar包，非常适合演示代码或者测试代码。

## com.zaxxer:HikariCP
- HikariDataSource的主要作用是提供了一种简单而高效的方式来管理数据库连接。
它通过在应用程序启动时创建一定数量的数据库连接并将其保存在连接池中，以便在需要时快速获取可用的连接。

- HikariDataSource是 Java 中用于创建数据源（DataSource）的类，它是 HikariCP 数据库连接池库的一部分。
HikariCP 是一个高性能且易于使用的 Java 数据库连接池库。


## org.springframework:spring-orm
spring-orm 模块提供了对多种 ORM 框架的支持，包括 Hibernate、MyBatis、JPA 等
。它提供了一些基础设施，如数据源管理、事务管理、异常处理等，以及一些通用的 ORM 操作，如查询、保存、更新、删除等。

需要注意的是，spring-orm 模块只是 Spring Framework 的一部分，如果需要使用 ORM 功能，还需要根据具体的 ORM 框架来配置和使用相应的库和映射文件。

## org.hibernate:hibernate-core
全自动 ORM框架，存在一二级缓存。但存在数据不一致性问题。

## org.mybatis:mybatis-spring
半自动 ORM 框架，即每次读取操作一定是数据库操作而不是缓存，所执行的SQL是完全确定的，缺点就是代码比较繁琐，构造INSERT INTO users VALUES (?,?,?)更是复杂。
