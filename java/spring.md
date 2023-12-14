# Spring



## 注解
- @Bean    
  1. 在 Spring 中，Bean 是一个被 Spring 管理的对象，它通常是一个 Java 类的实例。
  通过 Spring 的 IOC（Inverse of Control） 容器，可以对 Bean 进行创建、配置、初始化和管理。

  2. 因为 Spring 是通过扫描 classpath 获取到所有的 Bean，而 List 是有序的，要指定List中Bean的顺序，可以加上@Order注解

- @Component
  - 在 Spring 框架中，@Component 是一个注解，用于将一个类标记为 Spring 管理的组件。
  - 被 @Component 注解的类将会被 Spring 容器扫描并自动注册为 Spring 应用上下文中的一个组件。这样，    
  该类就可以通过 Spring 的依赖注入（DI）功能来获取其他组件的依赖，并且可以被其他组件通过 Spring 的服务定位功能来发现和使用。    
  - @Component 注解是一个通用的注解，它没有明确指定该组件的具体作用。通常情况下，如果一个类需要被 Spring 管理，    
  并且没有更具体的注解（如 @Service、@Repository、@Controller 等）适用，那么可以使用 @Component 注解。