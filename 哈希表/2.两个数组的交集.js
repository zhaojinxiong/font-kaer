/**
 * 两个数组的交集
 *
 * 给定两个数组,编写一个函数来计算它们的交集。
 * num1 = [1,2,2,1] num2 = [2,2]
 *
 * 输出[2]
 *
 * num1 = [4,9,5]
 * num2 = [9,4,9,8,4]
 * 输出 [9,4]
 */

var intersection = function (nums1, num2) {
  // 根据数组大小交换操作的数组
  if (nums1.length < num2.length) {
    const _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }

  const nums1Set = new Set(nums1);
  const resSet = new Set();

  // 循环 比迭代器快
  for (let i = num2.length - 1; i >= 0; i--) {
    nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
  }
  return Array.from(resSet);
};
