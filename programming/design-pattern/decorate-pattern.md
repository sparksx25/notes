# 装饰器模式

- 用途可以在不修改原始对象的情况下，通过将对象放入包装器对象中，逐层包装来扩展其功能。
- 使用场景： 1、**扩展**一个类的功能。 2、动态增加功能，动态撤销。
- 注意事项：可代替继承。

```javascript
// 组件接口
class Coffee {
  cost() {
    return 10;
  }
}

// 具体组件
class SimpleCoffee extends Coffee {
  cost() {
    return 10;
  }
}

// 装饰器
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 5;
  }
}

// 装饰器
class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

// 创建具体组件对象
let myCoffee = new SimpleCoffee();
console.log("Cost of simple coffee: " + myCoffee.cost());

// 使用装饰器包装具体组件对象
myCoffee = new MilkDecorator(myCoffee);
console.log("Cost of coffee with milk: " + myCoffee.cost());

// 再次使用装饰器包装具体组件对象
myCoffee = new SugarDecorator(myCoffee);
console.log("Cost of coffee with milk and sugar: " + myCoffee.cost());
```
