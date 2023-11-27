# 对象类型

## 可选属性

## 只读属性 
```typescript
type MyObj = {
  readonly x: string,
  y?: string
};
```

## 属性名的索引类型
- 属性的索引类型写法，建议谨慎使用，因为属性名的声明太宽泛，约束太少。另外，属性名的数值索引不宜用来声明数组，
因为采用这种方式声明数组，就不能使用各种数组方法以及length属性，因为类型里面没有定义这些东西

- 数值索引不能与字符串索引发生冲突，必须服从后者，这是因为在 JavaScript 语言内部，所有的数值属性名都会自动转为字符串属性名。
```typescript
type MyType = {
  [x: number]: boolean; // 报错
  [x: string]: string;
}
```


## 严格字面量检查
如果对象使用字面量表示，会触发 TypeScript 的严格字面量检查（strict object literal checking）。
如果字面量的结构跟类型定义的不一样（比如多出了未定义的属性），就会报错。


## 空对象
- 空对象是 TypeScript 的一种特殊值，也是一种特殊类型。
- 空对象作为类型，其实是Object类型的简写形式。
- TypeScript 不允许动态添加属性，所以对象不能分步生成，必须生成时一次性声明所有属性

```typescript
const obj = {};
obj.prop = 123; // 报错

let d:{};
// 等同于
// let d:Object;

d = {};
d = { x: 1 };
d = 'hello';
d = 2;
```