# Annotation 

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

## 常用注解
- @Value
- @Autowired    
  自动装配

- @PostConstruct


- @Configuration    
  由 Spring 提供

- @ComponentScan
- @PropertySource
- Component


- @Bean    
  1. 在 Spring 的 IoC 容器中，我们把所有组件统称为 JavaBea n，即配置一个组件就是配置一个Bean。

  2. 在 Spring 中，Bean 是一个被 Spring 管理的对象，它通常是一个 Java 类的实例。
  通过 Spring 的 IOC（Inverse of Control） 容器，可以对 Bean 进行创建、配置、初始化和管理。

  3. 因为 Spring 是通过扫描 classpath 获取到所有的 Bean，而 List 是有序的，要指定List中Bean的顺序，可以加上@Order注解

- @Component
  1. 被 @Component 注解的类将会被 Spring 容器扫描并自动注册为 Spring 应用上下文中的一个组件。这样，    
  该类就可以通过 Spring 的依赖注入（DI）功能来获取其他组件的依赖，并且可以被其他组件通过 Spring 的服务定位功能来发现和使用。    
  2. 被该注解注解的类内部还可以使用 @PostConstruct， @PreDestroy，这两个注解会在类的相应生命周期执行。