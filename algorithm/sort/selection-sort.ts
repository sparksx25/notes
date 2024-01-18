
var arr = [8, 1, 7, 3, 5, 2, 4, 6];

/**
 * 选择排序：
 * 原地排序
 * 非稳定排序
 * @param nums 
 * @returns 
 */
function selectionSort(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
}
// selectionSort(arr)
// console.log(arr)

/**
 * 冒泡排序：
 * 原地排序
 * 稳定排序
 * @param nums 
 * @returns 
 */
function bubbleSort(nums: number[]) {
  let ordered = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        ordered = true;
      }
    }
    if (ordered) return nums;
  }
}
// bubbleSort(arr)
// console.log(arr)


/**
 * 插入排序：
 * 原地排序
 * 稳定排序
 * @param nums 
 * @returns 
 */
function insertionSort(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    const base = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = base;
  }
}
// insertionSort(arr)
// console.log(arr)

/**
 * 快速排序：
 * 非原地排序
 * 非稳定排序
 * @param nums 
 * @returns 
 */
function quickSort(nums: number[]) {
  function travel(list: number[]): number[] {
    if (list.length <= 1) return list;
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 1; i < list.length; i++) {
      if (list[i] < list[0]) {
        left.push(list[i]);
      } else {
        right.push(list[i]);
      }
    }
    return travel(left).concat(list[0]).concat(travel(right));
  }
  return travel(nums);
}
// console.log(quickSort(arr))

/**
 * 归并排序：
 * 非原地排序
 * 稳定排序
 * @param nums 
 * @returns 
 */
function mergeSort(nums: number[]) {
  function travel(list: number[]) {
    if (list.length <= 1) return list;
    const m = Math.floor(list.length / 2);
    let left = list.slice(0, m);
    let right = list.slice(m);
    left = travel(left);
    right = travel(right);
    const res: number[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        res.push(left[i]);
        i++;
      } else {
        res.push(right[j]);
        j++;
      }
    }
    return res.concat(left.slice(i)).concat(right.slice(j));
  }
  return travel(nums);
}
// console.log(mergeSort(arr))

/**
 * 堆排序
 * 非原地排序
 * 非稳定排序
 * @param nums 
 */
function heapSort(nums: number[]) {
  function siftDown(i: number) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left > nums.length - 1) return;

    let min = nums[left] < nums[i] ? nums[left] : nums[i];
    if (right < nums.length) {
      min = min < nums[right] ? min : nums[right];
    }
    if (min === nums[left]) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      siftDown(left);
    } else if (min === nums[right]) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      siftDown(right);
    }
  }
  const startIndex = Math.floor(nums.length / 2);
  for (let i = startIndex; i >= 0; i--) {
    siftDown(i);
  }
  const res: number[] = [];
  while (nums.length) {
    res.push(nums[0]);
    if (nums.length > 1) {
      nums[0] = nums[nums.length - 1];
    }
    nums.pop();
    siftDown(0);
  }
  return res;
}
console.log(heapSort(arr))