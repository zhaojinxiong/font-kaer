/**
 * 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0。
 *
 * 输入：s = 7, nums = [2,3,1,2,4,3]
 * 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 *
 * 为了易于大家理解，我特意录制了B站视频拿下滑动窗口！ | LeetCode 209 长度最小的子数组 (opens new window)，
 * 结合视频看本题解，事半功倍！
 * 所谓滑动窗口 就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。
 *
 * 在暴力解法中,是一个for循环滑动窗口的起始位置, 一个for循环为滑动窗口的终止位置,
 * 用两个for循环完成一个不断搜索区间的过程。
 *
 * 那么滑动窗口如何用一个for循环来完成这个操作呢。
 *
 * 首先要思考 如果用一个for循环，那么应该表示 滑动窗口的起始位置，还是终止位置。
 * 如果只用一个for循环来表示滑动窗口的起始位置，那么如何遍历剩下的终止位置?
 *
 * 此时难免陷入 暴力解法的怪圈。
 *
 * 所以 只用一个for循环，那么这个循环的索引，一定是表示 滑动窗口的终止位置。
 *
 *
 *
 */

var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;

  let sum = 0;
  let len = nums.length;
  let ans = nums.length;

  while (end < len) {
    sum += nums[end];
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === Infinity ? 0 : ans;
};
