/*
  [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
*/

// 方法一: 按顺序以字符串的每个位置作为字符子串的起始位置进行查找
// function lengthOfLongestSubstring(s: string): number {
//   if (s.length === 0) return 0;
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     const set = new Set<string>();
//     for (let j = i; j < s.length; j++) {
//       if (set.has(s[j])) {
//         break;
//       } else {
//         set.add(s[j]);
//       }
//     }
//     max = Math.max(max, set.size);
//   }
//   return max;
// };

// 方法二: 
// function lengthOfLongestSubstring(s: string): number {
//   if (s.length === 0) return 0;
//   let max = 0;
//   let queue: string[] = [];
//   for (let i = 0; i < s.length; i++) {
//     let index = queue.indexOf(s[i]);
//     queue.push(s[i])
//     if (index > -1) {
//       queue = queue.slice(index + 1)
//     }
//     max = Math.max(max, queue.length);
//   }
//   return max;
// };

// 方法三: 滑动窗口 abba
// function lengthOfLongestSubstring(s: string): number {
//   if (s.length === 0) return 0;
//   let map = new Map<string, number>();
//   let left = 0;
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       // 最新的左指针不能比上一次左指针的位置小。
//       left = Math.max(left, map.get(s[i])! + 1);
//     }
//     map.set(s[i], i);
//     max = Math.max(max, i - left + 1);
//   }
//   return max;
// };
