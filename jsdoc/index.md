# jsdoc

## 定义函数类型
```javascript
/**
 * @description 唤起原生拨号
 * @param {string} url
 * @param {object} [query]
 * @return {Promise<any>}
*/
export async function request(url, query) {
}
```

## 类型定义
```javascript
/**
 * @typedef { object } PayOptions
 * @prop { () => void } onSuccess 支付成功
 * @prop { () => void } onError 支付失败，不包含未登录微信点击返回
 * @prop { object } Data
*/
```

## 导入类型
```javascript
/**
 * 引用其他文件中定义的类型并设置别名为 Handler
 * @typedef {import('@/utils/bridge').Handler} Handler
*/
```

## 定义对象类型
```javascript
/**
 * 定义一个对象类型，对象的键是字符串，值是对象类型
 * @typedef {Map<string, { id: number }>} Item
*/
```