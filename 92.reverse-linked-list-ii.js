/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

/**
 * 链表问题需要技巧与方法
 *
 * 这道旋转指定链表长度
 *
 * 1. 找出旋转开始的点
 * 2. 找出旋转的步骤
 *
 * 1. 我们可以利用循环帮助我们抵达要执行的位置
 *    这里利用虚拟节点的方法，避免操作旋转数组为第一位时 需要考虑特殊性
 *    如29 -> 36行代码所示
 * 2. 找出旋转的步骤
 *    首先 我们需要找到旋转起点的前一个点 设置为prev
 *    然后 找到旋转的开始点  设置为cur
 *    最后 找到针对单个cur点进行旋转的后一个点。
 *
 * 例如 1->2->3->4->5
 *
 * 假设 2为cur 1为prev 3为then
 * 我们要将 1->3->2->4->5
 * 实际上就是将  节点2指向4节点 节点3next指向2节点 节点1next指向3节点
 *
 * 即 cur.next = then.next
 *    then.next = prev.next  // 这一步用原引用而不用cur 是因为需要保持链接状态
 *    prev.next = then
 *    then = cur.next   // 此时的cur.next => 指向了4
 *
 * 这种解法，将转换后的点都看成一个部分
 *
 * 例如一次进行后
 *
 * 1->3->2->4->5
 *
 * 下一次开始 就时将 3->2 看成了一个整体了
 *
 */
var reverseBetween = function(head, m, n) {
  if (!head) return head;
  var dummy = new ListNode(0);
  dummy.next = head;
  var prev = dummy,
    index = 0;
  while (index < n) {
    ++index;
    prev = prev.next;
  }
  var cur = prev.next,
    then = cur.next;
  while (index < n) {
    cur.next = then.next;
    then.next = prev.next;
    prev.next = then;
    then = cur.next;
    ++index;
  }
  return dummy.next;
};
