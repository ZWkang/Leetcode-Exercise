/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 理解转换的位置即可。

// 1->2->3->4

// dummy => 1 => 2 => 3 => 4

//  pre   node1 node2 next

//  pre.next => node2
//  node2.next => node1
//  node1.next => next
//  pre = node1

// 链表的穿针引线感觉都是 要很注意每一步的操作，还要不能丢失链表节点。

// var swapPairs = function(head) {
//     var dummy = new ListNode(0)
//     dummy.next = head

//     var p = dummy

//     while(p.next != null && p.next.next != null) {
//         var node1 = p.next
//         var node2 = node1.next
//         var next = node2.next

//         node2.next = node1
//         node1.next = next
//         p.next = node2
//         p = node1
//     }
//     return dummy.next
// };

var swapPairs = function(head) {
  var dummy = new ListNode(0);
  dummy.next = head;

  var p = dummy;
  while (p.next !== null && p.next.next !== null) {
    var node1 = p.next;
    var node2 = node1.next;
    var next = node2.next;

    p.next = node2;
    node2.next = node1;
    node1.next = next;

    p = node1;
  }

  return dummy.next;
};
