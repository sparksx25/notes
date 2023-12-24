/* 
  两数之和
  给定一个【整数】数组 nums 和一个整数目标值 target，请你在该数组中找出 
  和为目标值 target  的那 两个整数，并返回它们的【数组下标】。
  你可以假设每种输入只会对应【一个答案】。但是，数组中同一个元素在答案里【不能重复】出现。
  你可以按任意顺序返回答案。
  [leetcode 原题地址](https://leetcode.cn/problems/two-sum/)
*/



// 方法一：暴力枚举
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// 方法二：使用字典
function twoSum(nums: number[], target: number): number[] {
  // { key:另一个数字, value: 当前数字对应的索引 }
  const map:{[index:number]: number} = {}
  for (let i = 0; i < nums.length; i++) {
    if (typeof map[nums[i]] === 'number') {
      return [map[nums[i]], i];
    }
    map[target-nums[i]] = i;
  }
  return [];
};