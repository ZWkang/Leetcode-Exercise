/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/**
 * 做链表问题一定要厘清操作步骤
 *
 * 我们做数组的反转k位问题。
 * 如189题
 *  1. 粗暴的做法有直接申请空间
 *  2. 先旋转前[0,n-k) [n-k,n] 再旋转[0,n] 从而使得整体反转
 *  3. 利用 (index + element) % k 来计算位置然后处理
 *
 * 链表的思路与这个也可以有所类似。
 * 因为是链表，所以这里直接选用快慢指针处理
 *
 * 1. 取得链表长度
 * 2. 快慢指针 快指针指向倒数第一个节点，
 *   eg 1->2->3->4->5->null
 *   例如 k为2
 *   则快指针需要指向 5 慢指针需要指向3 他们之间相差的距离为k
 *   反转的操作也就更直接了。
 *   记录 3->4 4节点  slowNext = slowNode.next
 *   记录 开头的head节点 dummyNext = dummy.next
 *   然后进行指针更改   fastNode -> dummyNext
 *   slowNode -> null
 *   dummy.next -> slowNext
 *
 *   返回dummy-> next即可
 */
var rotateRight = function(head, k) {
  if (!head) return head;
  var dummy = new ListNode(0);
  dummy.next = head;

  // 取得链表长度
  var cur = dummy.next;

  var ll = 0;
  while (cur) {
    ++ll;
    cur = cur.next;
  }

  k = k % ll;
  // 求模 防止k超过链表长度
  if (ll === 1 || k === 0 || ll === k) return dummy.next;

  var fast = k;

  var fastNode = dummy,
    slowNode = dummy;
  // 快指针先走k步
  while (fast > 0) {
    --fast;
    fastNode = fastNode.next;
  }
  // 设定快慢指针
  while (fastNode != null && fastNode.next != null) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }
  // 交换操作
  var next = slowNode.next;
  var dummyNext = dummy.next;
  dummy.next = next;
  fastNode.next = dummyNext;
  slowNode.next = null;

  return dummy.next;
};
