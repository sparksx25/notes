# Annotation 

## 常用注解
- @Target
- @Retention
- @Inherited
- @Repeated
- @Documented

- @Override
- @SuppressWarning
- @Deprecated

- @FunctionalInterface
- @Nullable

- @Bean
- @Primary
- @Order

- @Value
- @Autowired    
- @Configuration    
- @ComponentScan
- @Component
- @PostConstruct
- @PropertySource
- @Lazy

##  元注解
@Target： 定义自定义注解的使用范围，如，类，类字段，类方法，类方法参数
@Retention: 定义自定义注解的生命周期，如编译阶段使用，加载.class文件时使用，运行时使用
@Inherited: 注解是否可以继承
@Repeated: 是否可以重复使用注解

## 编译时使用的注解
@Override
@SuppressWarning

## 自定义注解
使用 interface 自定义注解




## @Configuration
- 用在类上，指示 Spring 容器当前类使用了 @Bean 定义方法。

```java
import org.springframework.context.annotation.Configuration;
```


## @Bean
- 用在类方法上，指示 Spring 容器初始化之后，执行该方法，并将该方法的返回值添加到 Spring 容器中。
```java
import org.springframework.context.annotation.Bean;
```


## @Primary
- 用在类，类方法上，当使用 @Bean 注解的多个方法返回相同的类型值时，指示默认使用哪个方法的返回值。
import org.springframework.context.annotation.Primary;


## @Qualifier是
- 用在类字段，方法参数上，当使用 @Bean 注解的多个方法返回相同的类型值时，指示使用哪个方法的返回值。


## @Component
- 标记一个需要添加到 Spring 容器的组件
```java
import org.springframework.stereotype.Component;

```


## @ComponentScan
  1. 被 @Component 注解的类将会被 Spring 容器扫描并自动注册为 Spring 应用上下文中的一个组件。这样，    
  该类就可以通过 Spring 的依赖注入（DI）功能来获取其他组件的依赖，并且可以被其他组件通过 Spring 的服务定位功能来发现和使用。    
  2. 被该注解注解的类内部还可以使用 @PostConstruct， @PreDestroy，这两个注解会在类的相应生命周期执行。


## @Autowired
- @Component 注解的类可以使用 @Autowired 来标记字段，构造函数，setter 方法。起自动装配 Bean 的作用
```java
import org.springframework.beans.factory.annotation.Autowired;
```

## @Scope
- 指定 Bean 的作用域是单例（singleton）、原型（prototype）、请求（request）、会话（session）或全局（globalsession）。

## @Lazy
- 容器启动后不创建对象，而是在第一次获取Bean时创建对象。用于懒加载初始化标注的类、方法和参数