/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let first = head;
  let second = head.next;
  let others = head.next.next;
  // second 指针指向first
  second.next = first;
  // fisrt 指针指向下一个secend
  first.next = swapPairs(others);

  return second;
};
// @lc code=end
