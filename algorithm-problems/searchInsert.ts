/* [搜索插入位置](https://leetcode.cn/problems/search-insert-position/)

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。 */

// 二分查找
function searchInsert(nums: number[], target: number) {
  let l = 0;
  let r = nums.length - 1;
  let index = nums.length;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target <= nums[mid]) {
      index = mid;
      // 缩小范围继续查找能否符合条件的位置
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return index;
}


// function binarySearch(nums: number[], target: number) {
//   let l = 0;
//   let r = nums.length;
//   while (l <= r) {
//     const middle = Math.floor((l + r) / 2);
//     if (nums[middle] === target) return middle;
//     else if (nums[middle] > target) {
//       r = middle - 1;
//     } else {
//       l = middle + 1;
//     }
//   }
// }

console.log(searchInsert([1,2,3,4], 1))