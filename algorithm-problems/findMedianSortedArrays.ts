/*
  寻找两个正序数组的中位数
  给定两个大小分别为 m 和 n 的【正序】（从小到大）数组 nums1 和 nums2。
  请你找出并返回这两个正序数组的 中位数 。算法的时间复杂度应该为 O(log (m+n)) 。

  [leetcode 原题地址](https://leetcode.cn/problems/median-of-two-sorted-arrays/)
*/

// 方法一：按从小到大的顺序合并两个数组，求出中位数
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let list: number[] = [];
  let aIndex = 0;
  let bIndex = 0;
  while (aIndex < nums1.length && bIndex < nums2.length) {
    if (nums1[aIndex] === nums2[bIndex]) {
      list.push(nums1[aIndex], nums2[bIndex]);
      aIndex += 1;
      bIndex += 1;
    } else if (nums1[aIndex] < nums2[bIndex]) {
      list.push(nums1[aIndex]);
      aIndex += 1;
    } else {
      list.push(nums2[bIndex]);
      bIndex += 1;
    }
  }
  if (aIndex < nums1.length) {
    list = list.concat(nums1.slice(aIndex));
  }
  if (bIndex < nums2.length) {
    list = list.concat(nums2.slice(bIndex));
  }
  const middle = Math.floor(list.length / 2);
  if (list.length % 2) {
    return list[Math.floor(middle)];
  }
  return (list[middle] + list[middle - 1]) / 2;
};