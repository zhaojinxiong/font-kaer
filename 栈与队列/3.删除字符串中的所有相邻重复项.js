/**
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

    在 S 上反复执行重复项删除操作，直到无法继续删除。

    在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 */

var removeDuplicates = function (s) {
  const result = [];
  for (const i of s) {
    if (i === result[result.length - 1]) {
      result.pop();
    } else {
      result.push(i);
    }
  }
  return result.join("");
};

// 原地解法 (双指针模拟栈)
var removeDuplicates2 = function (s) {
  s = [...s];
  let top = -1;
  for (let i = 0; i < s.length; i++) {
    if (top === -1 || s[top] !== s[i]) {
      s[++top] = s[i];
    } else {
      --top;
    }
  }
  s.length = top + 1;
  return s.join(" ");
};
