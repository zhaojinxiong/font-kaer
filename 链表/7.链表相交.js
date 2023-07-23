/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null
 *
 */

var getList = function (head) {
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
};

var getIntersectionNode = function (headA, headB) {
  let curA = headA;
  let curB = headB;

  let lenA = getListLen(headA);
  let lenB = getListLen(headB);

  if (lenA < lenB) {
    // 让curA为最长链表的头，lenA为其长度

    // 交换变量注意加分号，两个数组交换变量在同一个作用域下时
    // 如果不加分号，下面两条代码等于同一条代码
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }

  let i = lenA - lenB; // 求长度差
  while (i-- > 0) {
    // 让curA和curB在同一起点上（末尾位置对齐）
    curA = curA.next;
  }
  while (curA && curA !== curB) {
    // 遍历curA 和 curB，遇到相同则直接返回
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};
