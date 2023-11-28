# 类型断言

## 类型断言的条件

## as const 断言

## 非空断言

## 断言函数
- 断言函数是一种特殊函数，用于保证**函数参数**符合某种类型。   

- 如果函数参数达不到要求，就会抛出错误，中断程序执行；如果达到要求，就不进行任何操作，让代码按照正常流程运行。

- 断言函数不返回值，而类型保护函数总是返回一个布尔值

```typescript
function isString(
  value:unknown
): assert value is string {
  return typeof value === 'string';
}
```

## 类型保护函数
```typescript
function isString(
  value:unknown
):value is string {
  return typeof value === 'string';
}
```