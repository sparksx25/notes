# 原型

## prototype 属性
每个函数都有 `prototype` 属性，该属性指向一个对象。这个对象被构造函数生成的所有实例共享。
并且这个对象上的属性和方法不是直接作为实例属性，而是最为继承属性。

## constructor 属性
每个原型对象都有一个 `constructor` 属性，指向该对象的构造函数。

##  isPrototypeOf()方法
这个方法用来判断，某个 `proptotype` 对象和某个实例之间的关系

## hasOwnProperty()方法
每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性

## in运算符
in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。

## Object.create() 垫片
```javascript
Object.create = function(obj) {
  function F() {}
  F.prototype = o;
  return new F();
}
```