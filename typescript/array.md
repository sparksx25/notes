# 数组类型

## 只读数组
```typescript
// 正确
let a2:readonly number[] = a1;

// 报错: readonly 关键字不能与数组的泛型写法一起使用
const arr:readonly Array<number> = [0, 1];

// 正确
const a1:ReadonlyArray<number> = [0, 1];
const a2:Readonly<number[]> = [0, 1];

// 正确： as const告诉 TypeScript，推断类型时要把变量arr推断为只读数组，从而使得数组成员无法改变
const arr = [0, 1] as const;
```

