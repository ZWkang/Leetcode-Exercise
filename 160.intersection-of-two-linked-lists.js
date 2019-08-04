/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**
 * 解题思路
 *  这种做法是让两个链表都一起走
 *  然后如果有a链表走到了尾端，则在b链表继续开始
 *  同理b链表也是这种策略
 *  然后查看是否存在相同节点。
 *  因为上面的策略保证了，两个节点走的长度是一致的。
 *  因为针对每一个指针都是最多走a+b链表长度，
 *  那么此时结束条件只有两种，一是找到了相遇节点 2是到达了尾部null
 */
var getIntersectionNode = function(headA, headB) {
  var l1 = headA,
    l2 = headB;
  while (l1 != l2) {
    l1 = l1 != null ? l1.next : headB;
    l2 = l2 != null ? l2.next : headA;
  }
  return l1;
};
/**
 * 思路 先走一遍，找出两个链表的长度差异
 * 再用快慢指针补齐长度，知道走到链表尾部。查看是否存在某个时刻两个链表即诶但相等
 */

var getIntersectionNode = function(headA, headB) {
  var lenA = 0,
    lenB = 0,
    l1 = headA,
    l2 = headB;
  // 计算两个链表长度
  while (l1 != null) {
    ++lenA;
    l1 = l1.next;
  }
  while (l2 != null) {
    ++lenB;
    l2 = l2.next;
  }

  // 找出快慢指针长度差异
  var rest = lenA > lenB ? lenA - lenB : lenB - lenA;
  (l1 = headA), (l2 = headB);
  // 补齐操作
  if (lenA > lenB) {
    while (rest > 0) {
      --rest;
      l1 = l1.next;
    }
  } else {
    while (rest > 0) {
      --rest;
      l2 = l2.next;
    }
  }
  while (l1 != null || l2 != null) {
    if (l1 === l2) {
      return l1;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return null;
};
