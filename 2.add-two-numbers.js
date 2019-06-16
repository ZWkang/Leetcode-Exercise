/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 首先是 两个非空链表。且各自的位数按照逆序存储。
// 2 -> 4 -> 3 + 5 -> 6 -> 4
// 342 + 465

// 首先肯定是要重建一个链表空间存储
// 再者我们考虑一下两个链表的长度是否可能会不一致？
// 例如1234 + 234
// 4 -> 3 -> 2 -> 1 + 4 -> 3 + 2
// 这种情况下我们不难发现，在逆序的情况下
// 有差距的链表与被累加位置无关
// 所以我们遍历链表的时候 能同步就同步，不能同步的话就使得其单个操作即可。

// 能设想的边界情况有 [9, 9 , 9, 9] [1]
// 在这种边界情况下我们应该要使得最后再添加一位1
// 这种边界情况下是当两个链表都遍历完毕，且sum仍为1 则代表还需要进为1.
// 此时我们应该在next再添加1这个节点。
var addTwoNumbers = function(l1, l2) {
  var prev = l1;
  var next = l2;
  var sum = 0;
  var dummy = new ListNode(0);
  var current = dummy;

  while (prev != null || next != null) {
    if (prev != null) {
      sum += prev.val;
      prev = prev.next;
    }
    if (next != null) {
      sum += next.val;
      next = next.next;
    }
    current.next = new ListNode(sum % 10);
    sum = Math.floor(sum / 10);

    current = current.next;
  }
  if (sum == 1) {
    current.next = new ListNode(sum);
  }
  return dummy.next;
};
