# 最大并行请求数

```javascript
function ajax(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  })
}

const task = [];
const MAX_THREAD = 2;
const pending = [];

function execute() {
  if (pending.length < MAX_THREAD && task.length) {
    const p = task.shift();
    pending.push(p);
    p.resolve();
  }
}

const http = function (data) {
  const item = { promise: null, resolve: null };
  const promise = new Promise((resolve) => {
    item.resolve = resolve;
  });
  item.promise = promise;
  task.push(item);

  execute();
  return promise.then((res) => {
    return ajax(data)
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        for (let i = 0; i < pending.length; i++) {
          if (pending[i].promise === promise) {
            pending.splice(i, 1);
            break;
          }
        }
        execute();
      });
  });
}


http(1)
http(2)
http(3)
http(4)
```