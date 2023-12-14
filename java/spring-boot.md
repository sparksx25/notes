# Spring Boot

## 创建 Spring Boot 项目
1. 通过 maven命令行
2. 通过 IDE 插件提供共的创建界面

## 启动
- 命令行启动 `mvn spring-boot:run`
- 也可以通过 IDE 插件提供的 UI 界面启动

## .m2文件
.m2文件一般位于用户主目录下，里面包含了 spring 框架相关的 jar 包。


## 项目配置
- Spring Boot 默认包含了大多数常用的依赖和插件，项目中如果需要使用某个依赖，需要将该依赖手动添加到 pom 文件中，对于依赖的配置项，若不指定，则会从继承的配置读取。

- 项目的 pom.xml 配置文件的配置项继承了`spring-boot-starter-parent`，`spring-boot-dependencies`配置文件，

如添加 web 开发依赖，开发工具依赖
```xml
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>compile</scope>
        <!-- 依赖的版本信息使用父级配置的版本，也可以指定 -->
    </dependency>
	</dependencies>
```
  
## Annotation
- @Configuration   
将类标记为应用程序上下文的 Bean 定义源

- @ComponentScan    
告诉 Spring 在包中 com/example 查找其他组件、配置和服务，让它找到控制器。

- @Component    
用于标记类

- @Bean
用来标记类方法

- @Autowired
用来自动装配字段