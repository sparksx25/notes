# 时间处理

## Date
### Date 构造函数的几种形式 
```
new Date();
new Date(value);
new Date(dateString);
new Date(dateObject)
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

#### 没有参数
如果没有提供参数，那么新创建的 Date 对象表示实例化时刻的日期和时间。

#### Unix 时间戳
一个 13 位整数值的时间戳

#### dateString
2. 时间戳字符串 dateString（不推荐使用该方式创建 Date 对象）
```js
// 这个格式的日期被当做是本地时间进行解析
// Fri Dec 27 2024 00:00:00 GMT+0800 (中国标准时间)
new Date('2024/12/27')

// 对 ISO 8601 格式的支持中，仅有日期的串 (例如 "1970-01-01") 
// 会被处理为 UTC 而不是本地时间，与其他格式的串的处理不同。
// 这个格式的日期被当作是 UTC 时间进行解析
// Fri Dec 27 2024 08:00:00 GMT+0800 (中国标准时间)
new Date('2024-12-27')

// false
new Date('2024/12/27').getTime() === new Date('2024-12-27').getTime()

// true
new Date('2024-12-27 12:12:12').getTime() === new Date('2024/12/27 12:12:12').getTime()
```

#### 分别提供日期与时间的每一个成员
这些参数代表的是当地时间



## [Intl 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl)
Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化

### [Intl.DateTimeFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- 这个构造函数可以根据指定的语言环境(如 `zh-CN`, `en-US`)，格式化选项来生成一个日期，时间的格式化模板，可以应用在 `Date` 对象，进行格式化输出。

## 使用
- 获取当前设备操作系统所设定的时区 `new Intl.DateTimeFormat().timeZone`
- 获取时区与标准时间的差值 `Date.prototype.getTimezoneOffset()`;


## dayjs
```js
dayjs.extend(utc)

var a = dayjs()
// 2019-03-06T08:00:00+08:00
a.format() 
// 本地时间转 UTC 时间，返回 UTC 模式对象
a.utc().format() // 2019-03-06T00:00:00Z

// 提供了一种快捷方式，将这个时间直接当成 UTC 时间
dayjs('2016-05-03 22:15:01').utc(true).format() 


dayjs.extend(timezone);
const timestamp = "2014-06-01 12:00";
const tz = "America/New_York";

const dayjsLocal = dayjs(timestamp); //assumes UTC
//dayjsLocal.toISOString() -> 2014-06-01T12:00:00.000Z
//dayjsLocal.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T12:00:00

// 本地时间对应的纽约时间
const dayjsAmerica = dayjsLocal.tz(tz); //existing time treated as UTC
//dayjsAmerica.toISOString() -> 2014-06-01T12:00:00.000Z
//dayjsAmerica.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T08:00:00

// 根据这个时间生成一个数值相同的但是时区是纽约的时间
const dayjsAmericaKeep = dayjsLocal.tz(tz, true); //existing time treated as local time
//dayjsAmericaKeep.toISOString() -> 2014-06-01T16:00:00.000Z
//dayjsAmericaKeep.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T12:00:00
```