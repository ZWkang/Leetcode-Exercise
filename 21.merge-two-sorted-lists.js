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
/**
 * 链表还是要找到解决问题思路
 *
 *   这里是合并两个有序链表
 *   那么就两个指针分别比对。
 *   例如 1->4->6 2->3->5
 *   1节点时a指针 2节点时b指针
 *   同时进行比对。
 *
 *   如果建立一个新的空间就很好搞定了。只要依次比对压进去。
 *   如果一个链表结束了，只要另一个链表剩余部分直接链接即可。
 */
var mergeTwoLists = function(l1, l2) {
  var prev = l1,
    next = l2;
  var dummy = new ListNode(0);
  var current = dummy;
  while (prev != null || next != null) {
    if (prev != null && next === null) {
      current.next = prev;
      break;
    }
    if (prev == null && next != null) {
      current.next = next;
      break;
    }
    if (prev.val > next.val) {
      current.next = new ListNode(next.val);
      next = next.next;
      current = current.next;
    } else if (prev.val <= next.val) {
      current.next = new ListNode(prev.val);
      prev = prev.next;
      current = current.next;
    }
  }
  return dummy.next;
};

/**
 * 这个方法就是递归实现。
 * 找到子问题是啥？ 就能找到递归实现啦。
 * 当某个链表为空了，就返回另一个。
 * 然后核心还是比较当前两个节点值大小
 * 如果 l1 的小，那么对于 l1 的下一个节点和 l2 调用递归函数，将返回值赋值给 l1.next，然后返回 l1；
 * 否则就对于 l2 的下一个节点和 l1 调用递归函数，将返回值赋值给 l2.next，然后返回 l2
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;
  var dummy = new ListNode(0);
  var tail = dummy;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      tail.next = l2;
      l2 = l2.next;
    } else {
      tail.next = l1;
      l1 = l1.next;
    }
    tail = tail.next;
  }
  tail.next = l1 ? l1 : l2;
  return dummy.next;
};
