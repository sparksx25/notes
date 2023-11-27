# 函数类型

## Function 
TypeScript 提供 Function 类型表示函数，任何函数都属于这个类型

## 可选参数

## 参数默认值

## 参数解构

```typescript
function destructure({ total, rows }: { total: number, rows: readonly string[]} = {total: 10, rows: ['A', 'B', 'C']}, id?:number) {
  total += 1;
  console.log(total)

  // 报错: rows 是只读的
  rows.push('D')
  console.log(rows)

  // 报错: id类型为 number|undefined
  console.log(id.toFixed())
}
destructure();
```

## rest 参数

## readonly 只读参数
如果函数内部不能修改某个参数，可以在函数定义时，在参数类型前面加上readonly关键字，表示这是只读参数

## 函数重载
```typescript
function reverse(str:string):string;
function reverse(arr:any[]):any[];
function reverse(
  stringOrArray:string|any[]
):string|any[] {
  if (typeof stringOrArray === 'string')
    return stringOrArray.split('').reverse().join('');
  else
    return stringOrArray.slice().reverse();
}
```


## 构造函数
在 JavaScript 中，类（class）本质上是构造函数。

写法一:
```typescript
class Animal {
  weight: number;
  constructor(public age: number) {
    this.weight = 160
    console.log(this.age);
  }
}
type AnimalConstructor = new (age: number) => Animal;
function create(c:AnimalConstructor):Animal {
  return new c(2);
}
```

写法二:
```typescript
type F = {
  new (s:string): object;
};
```