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
var addTwoNumbers = function(l1, l2) {
  var stack1 = [];
  var stack2 = [];
  var l1It = l1;
  var l2It = l2;
  while (l1It != null) {
    stack1.push(l1It.val);
    l1It = l1It.next;
  }
  while (l2It != null) {
    stack1.push(l2It.val);
    l2It = l2It.next;
  }
  var sum = 0;
  var dummy = new ListNode(0);
  var cur = dummy;
  while (stack1.length > 0 && stack2.length > 0) {
    if (stack1.length > 0) sum += stack1.pop();
    if (stack2.length > 0) sum += stack2.pop();

    var newNode = new ListNode(sum % 10);
    cur.next = newNode;
    cur = newNode;
    sum = Math.floor(sum / 10);
  }
  if (sum > 0) {
    var first = new ListNode(1);
    first.next = dummy;
    dummy = first;
  }
  return dummy.next;
};
