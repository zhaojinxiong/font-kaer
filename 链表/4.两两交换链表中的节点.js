/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

let swapPairs = function (head) {
  let ret = new LinkNode(0, head);
  let temp = ret;
  while (temp.next && temp.next.next) {
    let cur = temp.next.next;
    let pre = temp.next;

    pre.next = cur.next;
    cur.next = pre;
    temp.next = cur;
    temp = pre;
  }

  return ret.next;
};
