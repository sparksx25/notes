# Adapter Pattern (适配器模式)

用图: 用于将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

适配器模式通常涉及三个角色：
- 目标接口（Target）：客户端期待的接口形式。
- 适配者（Adaptee）：需要被适配的接口形式。
- 适配器（Adapter）：实现目标接口，并包装一个适配者对象，将适配者接口转换为目标接口。

```js
// 目标接口
class Target {
  request() {
    return "Target: The default target's behavior.";
  }
}

// 适配者
class Adaptee {
  specificRequest() {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

// 适配器
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

// 客户端代码
function clientCode(target) {
  console.log(target.request());
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
clientCode(adapter);
```

