/**
 * 给你一个整数数组 nums 和一个整数k, 找出nums 中和至少为k的最短非空
 * 子数组，并返回该子数组的长度。如果不存在这样的子数组，返回-1
 * 
 * 前缀和+单调双端队列
 * 
 * 记数组nums的前缀和数组为preSumArr, 可以根据 preSumArr[i]
 * 
 * 对于边界情况，preSumArr[0] = 0. 而从数组nums下标i开始长为m的子数组的和就可以根据
 * preSumArr[i+m]-preSumArr[i] 快速计算得到。
 * 
 * 题目要求计算nums中，和大于
 * 
 * 
 * 以i < j 为例子，也就是[i,j] 为子数组，首先如果[i,j] 已经满足了 >=k 那以i为左边界的情况下,
 * j继续往后走, 子数组都不可能找到短于[i,j]的了
 * 如果遇到负数，也就是 s[i]>s[j]，那 j 继续往后走的话，比如走到 k，如果s[k]-s[i]>=k，那s[k]-s[j]肯定也>=k 了，所以肯定比从 i 开始短，要它何用，丢掉
   那么我们需要灵活地在左右边界增删—— 那就是双端队列—— JS 数组自己就能干
 * 

   首先我们知道子区间问题, 要么动态规划，要么滑动窗口，要么前缀和，这个题目是相加，但动态规划和滑动窗
   似乎不太好做。 所以考虑利用前缀和的情况下如何去处理。 先预处理完了前缀和，
   题目就变成了：当前值是prefi 需要在0，i-1之间找到一个值x满足prefi - x > k 也就是x < prefx - k
   仔细考察一下这个题的性质，会发现
    https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/solutions/1925036/liang-zhang-tu-miao-dong-dan-diao-dui-li-9fvh/
    https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/solutions/1433630/tu-jie-by-wo-shi-a-miao-jiang-mpc7/
 */

var shortestSubarray = function (nums, k) {
  const n = nums.length;
  const preSumArr = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preSumArr[i + 1] = preSumArr[i] + nums[i];
  }

  let res = n + 1;
  const queue = [];
  for (let i = 0; i <= n; i++) {
    const curSum = preSumArr[i];
    while (queue.length != 0 && curSum - preSumArr[queue[0]] >= k) {
      res = Math.min(res, i - queue.shift());
    }

    while (queue.length != 0 && preSumArr[queue[queue.length - 1]] >= curSum) {
      queue.pop();
    }
    queue.push(i);
  }
  return res < n + 1 ? res : -1;
};
