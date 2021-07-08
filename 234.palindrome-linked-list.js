/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 // 与正常的回文差不多。。
 // 首先快慢指针，找到中间的节点。
 // 再将以中间往后的链表
var isPalindrome = function(head) {
  var p1 = head;
  var p2 = head;

  function reverse(head) {
    var prev = null;
    while (head != null) {
      var next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }

  var fast = head;
  var slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast != null) {
    slow = slow.next;
  }

  var slow = reverse(slow);
  while (slow != null) {
    if (slow.val !== head.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }
  return true;
};
