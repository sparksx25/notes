# 继承

## 实现要求
- 子类实例 可以继承 父类的实例变量
- 子类原型的修改不能影响到父类的原型


## 原型继承
```javascript
function extend(Child, Parent) {

  // 防止 Child 原型的修改不会影响到 Parent 原型
  var F = function () { };

  F.prototype = Parent.prototype;

  Child.prototype = new F();

  Child.prototype.constructor = Child;

  Child.uber = Parent.prototype;
}
```