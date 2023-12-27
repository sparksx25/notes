// [全排列](https://leetcode.cn/problems/permutations/)

function permute(nums: number[]): number[][] {
  let list: number[][] = [];
  function cb(index: number, combine: number[]) {
    combine.push(nums[index]);
    if (combine.length === nums.length) {
      list.push(combine);
      return;
    }
    for (let i = index + 1; i < nums.length; i++) {
      cb(i, combine);
      combine.pop();
    }
  }
  nums.forEach((_, index) => {
    cb(index, []);
  })
  return list;
};

console.log(permute([1,2,3]))