/* 
Q1:
  给定一个长度为 𝑛 的数组 nums ，元素按从小到大的顺序排列且不重复。请查找并返回元素
  target 在该数组中的索引。若数组不包含该元素，则返回 −1 。
*/
function binarySearch_A(nums: number[], target: number): number {
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor(i + (j - i) / 2);
    if (nums[m] < target) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else {
      return m;
    }
  }
  return -1;
}
console.log(binarySearch_A([1, 4, 5, 6, 7], 2))


/* 
Q2:
  给定一个长度为 𝑛 的有序数组 nums 和一个元素 target ，数组不存在重复元素。现将 target
  插入数组 nums 中，并保持其有序性。若数组中已存在元素 target ，则插入到其左方。
  请返回插入后 target 在数组中的索引。
*/
function binarySearch_B(nums: number[], target: number) {
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor(i + (j - i) / 2);
    if (nums[m] < target) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else {
      return m;
    }
  }
  return i;
}
console.log(binarySearch_A([1, 4, 5, 6, 7], 2))

/* 
Q3:
  给定一个长度为 𝑛 的有序数组 nums 和一个元素 target ，数组存在重复元素。现将 target
  插入数组 nums 中，并保持其有序性。若数组中已存在元素 target ，则插入到其左方。
  请返回插入后 target 在数组中的索引。
*/
function binarySearch_C(nums: number[], target: number) {
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor(i + (j - i) / 2);
    if (nums[m] < target) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else {
      j = m - 1;
    }
  }
  return i;
}
console.log(binarySearch_A([1, 4, 5, 5, 6, 7], 5))

