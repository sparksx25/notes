# Typescript 类型工具

## `Awaited<Type>`
`Awaited<Type>` 用来取出 Promise 的返回值类型，适合用在描述then()方法和 await 命令的参数类型。
```typescript
// number | boolean
type C = Awaited<boolean | Promise<number>>;
```

## `NonNullable<Type>`

## `Record<Keys, Type>`



## `Partial<Type>`
`Partial<Type>`返回一个新类型，将参数类型Type的所有属性变为可选属性。

## `Required<Type>`

## `Readonly<Type>`

## `ReadonlyArray<Type>`




## `Exclude<UnionType, ExcludedMembers>`
`Exclude<UnionType, ExcludedMembers>`用来从联合类型`UnionType`里面，删除某些类型`ExcludedMembers`，组成一个新的类型返回。

## `Extract<Type, Union>`
`Extract<UnionType, Union>`用来从联合类型`UnionType`之中，提取指定类型`Union`，组成一个新类型返回。它与`Exclude<T, U>`正好相反

## `Omit<Type, Keys>`

## `Pick<Type, Keys>`






## `Parameters<Type>`

## `ReturnType<Type>`

## `InstanceType`
`InstanceType<Type>`提取构造函数的返回值的类型（即实例类型），参数`Type`是一个构造函数，等同于构造函数的``ReturnType<Type>``。

## `ConstructorParameters<Type>`
`ConstructorParameters<Type>`提取构造方法`Type`的参数类型，组成一个元组类型返回。
```typescript
type T1 = ConstructorParameters<
  new (x: string, y: number) => object
>; // [x: string, y: number]
```

