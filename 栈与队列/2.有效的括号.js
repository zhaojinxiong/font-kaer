/***
 *
 * 有效括号
 * 给定一个只包括'(',')' ,'{', '}','[', ']' 的字符串 判断字符串是否有效。
 *
 * 有效字符串需满足:
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可以被认为是有效的字符串。
 *
 *
 *
 */

// 简化版本
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    }

    if (map[stack.pop()] !== x) {
      return false;
    }
  }
  return !stack.length;
};
