# Array.sort

## 参考资料
- [MDN sort排序](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [segmentfault: sort排序](https://segmentfault.com/a/1190000010648740)
- [MDN: github sort排序](https://github.com/mdn/translated-content/blob/main/files/zh-cn/web/javascript/reference/global_objects/array/sort/index.md?plain=1)

## 介绍
> sort() 方法**就地**对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序


## 使用方法
```typescript
type CompareFn = (a, b) => number
Array.prototype.sort(compareFn?:CompareFn)
```

| compareFn(a, b) 返回值	| 排序顺序 |
|   ---	  |   --------------  |
|   > 0	  |   a 在 b 后，如 [b, a]  |
|   < 0   |	  a 在 b 前，如 [a, b]  |
|   === 0 |	  保持 a 和 b 原来的顺序 |


## 使用 map 改善排序
`compareFn` 可能会在数组中的每个元素上调用多次。
所以确保 `compareFn` 是纯函数，里面不会包含除排序之外的逻辑


## 算法特点
- 自 EcmaScript 第 10 版（EcmaScript 2019）起，规范要求 Array.prototype.sort 为稳定排序。
虽然现在规范要求排序必须具有稳定性，该规范并未强制要求使用何种排序算法。

- 就地性


## ES10之前浏览器实现差异
|       浏览器                  |   使用的 JavaScript 引擎	|     排序算法  |
|         ---                 |        ---	            |      ---    |
|   Google Chrome	            |           V8	       | 插入排序和快速排序	|
|  Mozilla Firefox	          |     SpiderMonkey     |	归并排序	|
|       Safari	              | Nitro（JavaScriptCore ）	| 归并排序和桶排序	|
| Microsoft Edge 和 IE(9+)	  |   Chakra	          |       快速排序	    |


## 注意点
1. `compareFn` 可能会在数组中的每个元素上调用多次
2. undefined元素, 空槽不会不会进行比较，所以 `CompareFn` 方法一定不是 undefined
3. 所有的 undefined 元素都会被排序到数组的末尾。则空槽会始终排在所有 undefined 元素的后面。


