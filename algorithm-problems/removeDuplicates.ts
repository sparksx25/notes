/* [删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/)

给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
元素的 相对顺序 应该保持 一致 。
然后返回 nums 中唯一元素的个数。 */


// 方法二: 
function removeDuplicates(nums: number[]): number {
  let left = 0;
  let i = 1;
  while (i < nums.length) {
    if (nums[left] !== nums[i]) {
      left += 1;
      nums[left] = nums[i];
    }
    i += 1;
  }

  nums.length = left + 1;
  nums.splice(left + 1, nums.length);
  return nums.length;
};

// 方法一:
function removeDuplicates(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};