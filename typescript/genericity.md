# 泛型

1. 函数的泛型写法
2. 接口的泛型写法
3. 类的泛型写法
4. 类型别名的泛型写法

## 类型参数

## 类型参数的默认值

## 类型参数的约束条件
```typescript
type Fn<A extends string, B extends string = 'world'> =  [A, B];
type Result = Fn<'hello'> // ["hello", "world"]
```