# Typescript 类型工具

## `Awaited<Type>`
`Awaited<Type>` 用来取出 Promise 的返回值类型，适合用在描述then()方法和 await 命令的参数类型。
```typescript
// number | boolean
type C = Awaited<boolean | Promise<number>>;
```

## `NonNullable<Type>`
`NonNullable<Type>`用来从联合类型`Type`删除`null`类型和`undefined`类型，组成一个新类型返回，也就是返回`Type`的非空类型版本。


## `Record<Keys, Type>`
`Record<Keys, Type>`返回一个对象类型，参数Keys用作键名，参数Type用作键值类型。


## `Readonly<Type>`

## `ReadonlyArray<Type>`





## `Partial<Type>`
`Partial<Type>`返回一个新类型，将参数类型Type的所有属性变为可选属性。

## `Required<Type>`

## `Exclude<UnionType, ExcludedMembers>`
`Exclude<UnionType, ExcludedMembers>`用来从联合类型`UnionType`里面，删除某些类型`ExcludedMembers`，组成一个新的类型返回。

## `Extract<Type, Union>`
`Extract<UnionType, Union>`用来从联合类型`UnionType`之中，提取指定类型`Union`，组成一个新类型返回。它与`Exclude<T, U>`正好相反

## `Omit<Type, Keys>`
`Omit<Type, Keys>`用来从对象类型Type中，删除指定的属性Keys，组成一个新的对象类型返回。

## `Pick<Type, Keys>`
`Pick<Type, Keys>`返回一个新的对象类型，第一个参数Type是一个对象类型，第二个参数Keys是Type里面被选定的键名。






## `Parameters<Type>`
`Parameters<Type>`从函数类型Type里面提取参数类型，组成一个元组返回。

## `ReturnType<Type>`
`ReturnType<Type>`提取函数类型Type的返回值类型，作为一个新类型返回。

## `InstanceType<Type>`
`InstanceType<Type>`提取构造函数的返回值的类型（即实例类型），参数`Type`是一个构造函数，等同于构造函数的``ReturnType<Type>``。

## `ConstructorParameters<Type>`
`ConstructorParameters<Type>`提取构造方法`Type`的参数类型，组成一个元组类型返回。
```typescript
type T1 = ConstructorParameters<
  new (x: string, y: number) => object
>; // [x: string, y: number]
```

