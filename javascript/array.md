# Array

## every 与 some
1. every 方法假设所有元素**都符合**测试条件，当存在不符合条件的元素时才返回 false，所以`[].every(() => false)`返回 true.
1. some   方法假设所有元素**都不符合**测试条件，当存在符合条件的元素时才返回 true，所以`[].some(() => true)`返回 false.

[为什么 every()对空数组返回 true][https://humanwhocodes.com/blog/2023/09/javascript-wtf-why-does-every-return-true-for-empty-array/]
