/**
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。

 * @param {*} ransomNote 
 * @param {*} magazine 
 * @returns 
 */

var canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0),
    base = "a".charCodeAt();
  for (const s of magazine) {
    // 记录 magazine里各个字符出现次数
    strArr[s.charCodeAt() - base]++;
  }
  for (const s of ransomNote) {
    // 对应的字符个数做--操作
    const index = s.charCodeAt() - base;
    if (!strArr[index]) return false; // 如果没记录过直接返回false
    strArr[index]--;
  }
  return true;
};
