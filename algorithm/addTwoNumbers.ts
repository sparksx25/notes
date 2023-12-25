/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// https://leetcode.cn/problems/add-two-numbers/


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let plusses = 0;
  let node: ListNode | null = null;
  while(l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + plusses;
    const nextNode = new ListNode(sum % 10)
    plusses = Math.floor(sum / 10);
    if (node) {
      node.next = nextNode;
    } else {
      node = nextNode;
    }


    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return node;
};

