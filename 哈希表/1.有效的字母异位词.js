/**
 * 有效的字母异位词
 * 给定两个字符串 s和t, 编写一个函数来判断t是否是s的字母异位词
 * 示例 1: 输入: s = "anagram", t = "nagaram" 输出: true
 * 示例 2: 输入: s = "rat", t = "car" 输出: false
 *
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const resSet = new Array(26).fill(0);
  const base = "a".charCodeAt();
  for (const i of s) {
    resSet[i.charCodeAt() - base]++;
  }

  for (const i of t) {
    if (!resSet[i.charCodeAt() - base]) {
      return false;
    }
    resSet[i.charCodeAt() - base]--;
  }

  return true;
};

var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let char_count = new Map();
  for (let item of s) {
    char_count.set(item, (char_count.get(item) || 0) + 1);
  }
  for (let item of t) {
    if (!char_count.get(item)) {
      return false;
    }
    char_count.set(item, char_count.get(item) - 1);
  }
  return true;
};
