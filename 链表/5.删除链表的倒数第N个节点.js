/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 进阶：你能尝试使用一趟扫描实现吗？
 *
 */

let removeNthFromEnd = function (head, n) {
  let ret = new LinkNode(0, head);
  let slow = ret;
  let fast = ret;
  while (n--) {
    fast = fast.next;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return ret.next;
};


