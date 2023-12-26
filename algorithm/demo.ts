function removeElement(nums: number[], val: number): number {
  let duplicate = 0;
  let left = -1;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      left === -1 ? left = i : right = i;
    } else {
      
    }
  }
  return nums.length;
}; 
