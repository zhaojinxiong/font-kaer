/**
 *  逆波兰表达式求值
 * 根据 逆波兰表示法，求表达式的值。

    有效的运算符包括 + ,  - ,  * ,  / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 *  那么来看一下本题，其实逆波兰表达式相当于是二叉树中的后序遍历


 */

var evalRPN = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    if (isNaN(Number(token))) {
      // 非数字
      const n2 = stack.pop();
      const n1 = stack.pop();
      switch (
        token // 判断运算符类型，算出新数入栈
      ) {
        case "+":
          stack.push(n1 + n2);
          break;
        case "-":
          stack.push(n1 - n2);
          break;
        case "*":
          stack.push(n1 * n2);
          break;
        case "/":
          stack.push((n1 / n2) | 0);
          break;
      }
    } else {
      // 数字
      stack.push(Number(token));
    }
  }
  return stack[0]; // 因没有遇到运算符而待在栈中的结果。
};
