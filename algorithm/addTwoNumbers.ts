/**
  [两数相加](https://leetcode.cn/problems/add-two-numbers/)
  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

  请你将两个数相加，并以相同形式返回一个表示和的链表。

  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let decade = 0;
  let head: ListNode | null = null;
  let cursor: ListNode | null = null;
  while(l1 || l2 || decade > 0) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + decade;
    const nextNode = new ListNode(sum % 10);
    decade = sum > 9 ? 1 : 0;
    if (cursor) {
      cursor.next = nextNode;
      cursor = nextNode;
    } else {
      head = nextNode;
      cursor = nextNode;
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return head;
};

// TEST
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

function generateListNode(nums: number[]) {
  let i = 0; 
  let head: ListNode | null = null;
  let cursor: ListNode | null = head;
  while(i < nums.length) {
    const nextNode = new ListNode(nums[i]);
    if (cursor) {
      cursor.next = nextNode;
      cursor = cursor.next;
    } else {
      head = nextNode;
      cursor = nextNode;
    }
    i += 1;
  }
  return head;
}

function ListNodeToArray(node: ListNode | null) {
  const nums: number[] = [];
  while (node) {
    console.log(node.val)
    nums.push(node.val);
    node = node.next;
  }
  return nums;
}

const l1 = generateListNode([2, 4, 3])
const l2 = generateListNode([5, 6, 4])
console.log([2, 4, 3], [5, 6, 4], ListNodeToArray(addTwoNumbers(l1, l2)))