# 定时器

```js
  function sleep() {
      for (let i = 0; i < 1e10; i++) {}
  }
  let id = 1;
  let timer = setInterval(() => {
      console.log(id++)
  }, 10)
  sleep()
  setTimeout(() => {
      console.log('setTimeout')
      window.clearInterval(timer)
  }, 4)
  // TODO:
  // 有时结果是1，有时结果是 1,2。执行结果不稳定
```