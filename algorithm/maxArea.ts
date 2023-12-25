/*
[盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/description/)

给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

若使用暴力枚举，则超出时间限制
*/
// 方法一: 双指针
function maxArea(height: number[]): number {
  let i = 0, 
      j = height.length - 1,
      max = 0;
  while(i < j) {
    if (height[i] < height[j]) {
      max = Math.max(max, height[i] * (j - i));
      i += 1;
    } else {
      max = Math.max(max, height[j] * (j - i));
      j -= 1;
    }
  }
  return max;
};