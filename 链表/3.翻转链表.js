/**
 * 题意：反转一个单链表。
 * 示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
 *
 */

// 双指针
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let temp = null;
  let pre = null;
  let cur = head;

  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  return pre;
};

// 递归
var reverse = function (pre, head) {
  if (!head) {
    return pre;
  }
  const temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp);
};

var reverseList = function (head) {
  return reverse(null, head);
};

// 递归2
var reverse1 = function (head) {
  if (!head || !head.next) {
    return head;
  }
  // 从后往前翻
  const pre = reverse1(head.next);
  head.next = pre.next;
  pre.next = head;
  return head;
};

var reverseList = function (head) {
  let cur = head;
  while (cur && cur.next) {
    cur = cur.next;
  }
  reverse(head);
  return cur;
};
