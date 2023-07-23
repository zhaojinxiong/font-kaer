/**
 * 绝对差不超过限制的最长连续子数组
 * 给你一个整数数组 nums 和一个表示限制的整数 limit 请你返回最长连续子数组的长度，
 * 该子数组中任意两个元素之间的绝对差必须小于或者等于limit
 *
 * 如果不满足条件的子数组，则返回0
 *
 * 输入：nums = [8,2,4,7], limit = 4
 * 输出：2
 * [8] 最大绝对差 |8-8| = 0 <= 4
 * [8,2] 最大绝对差 |8-2| = 6 > 4.
 * [8,2,4] 最大绝对差 |8-2| = 6 > 4.
 * [8,2,4,7] 最大绝对差 |8-2| = 6 > 4.
 * [2] 最大绝对差 |2-2| = 0 <= 4.
 * [2,4] 最大绝对差 |2-4| = 2 <= 4.
 * [2,4,7] 最大绝对差 |2-7| = 5 > 4.
 * [4] 最大绝对差 |4-4| = 0 <= 4.
 * [4,7] 最大绝对差 |4-7| = 3 <= 4.
 * [7] 最大绝对差 |7-7| = 0 <= 4.
 * 因此，满足题意的最长子数组的长度为 2 。
 *
 * 示例 2：
 * 输入：nums = [10,1,2,4,7,2], limit = 5
 * 输出：4
 * 解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。
 *
 * 示例 3：
 * 输入：nums = [4,2,2,2,4,4,2,2], limit = 0
 * 输出：3
 *
 *
 * 思路和解法
 * 可以使用滑动窗口内的最大值与最小值，因此我们也可以分别使用两个单调队列解决本题。
 * 在实际代码中, 我们使用一个单调递增的队列queMin 维护最小值，一个单调递减的队列queMax 维护最大值。这样我们
 * 只需要计算两个队列的队首的差值，即可知道当前窗口是否满足条件。
 *
 */

var longestSubarray = function (nums, limit) {
  const queMax = [];
  const queMin = [];

  const n = nums.length;
  let left = 0;
  let rigth = 0;
  let ret = 0;

  while (rigth < n) {
    while (queMax.length && queMax[queMax.length - 1] < nums[right]) {
      queMax.pop();
    }
    while (queMin.length && queMin[queMin.length - 1] > nums[right]) {
      queMin.pop();
    }
    queMax.push(nums[right]);
    queMin.push(nums[right]);

    while (queMax.length && queMin.length && queMax[0] - queMin[0] > limit) {
      if (nums[left] === queMin[0]) {
        queMin.shift();
      }
      if (nums[left] === queMax[0]) {
        queMax.shift();
      }
      left++;
    }
    ret = Math.max(ret, rigth - left + 1);
    rigth++;
  }
  return ret;
 };
