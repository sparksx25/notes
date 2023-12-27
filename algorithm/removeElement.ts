/* [移除元素](https://leetcode.cn/problems/remove-element/submissions/)

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。 */



// 方法一: 将非重复元素从左到右排列
function removeElement(nums: number[], val: number): number {
  let left = 0, right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};

// 方法二: 非目标元素与目标元素交换位置，可保证元素不变
function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      if (left === right) {
        left = i;
        right = i + 1;
      } else {
        right += 1;
      }
    } else if (left < right) {
      const temp = nums[i];
      nums[i] = nums[left];
      nums[left] = temp;
      left += 1;
      i -= 1;
    } else {
      left = i;
      right = i;
    }
  }

  nums.length = left === right ? left + 1 : left;
  return nums.length;
};


// 方法三: 删除重复元素，语言内部重新排列元素，可保证原始顺序
function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
}; 