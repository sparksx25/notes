# 类型映射

## keyof, in

## 映射修饰符
```typescript
type A = {
  a: string;
  b: number;
};

type B = {
  [Prop in keyof A]?: A[Prop];
};
type C = {
  [Prop in keyof B]-?: A[Prop];
};
type D = {
  [Prop in keyof B]+?: A[Prop];
};
type E = {
  +readonly [Prop in keyof B]+?: A[Prop];
};
```


## 键名重映射
```typescript
type A = {
  foo: number;
  bar: number;
};

type B = {
  [p in keyof A as `${p}ID`]: number;
};

```

## 属性过滤
```typescript
type User = {
  name: string,
  age: number
}

type Filter<T> = {
  [K in keyof T as T[K] extends string ? K : never]: string
}

type FilteredUser = Filter<User> // { name: string }
```