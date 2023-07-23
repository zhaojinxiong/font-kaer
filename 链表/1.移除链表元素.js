/**
 * 题意：删除链表中等于给定值 val 的所有节点。
 *
 */
var removeElement = function (head, val) {
  const ret = new ListNode(0, head);
  let cur = ret;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return ret.next;
};
