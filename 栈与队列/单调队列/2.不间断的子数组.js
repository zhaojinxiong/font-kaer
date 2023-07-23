/**
 * 给你一个下标从0开始的整数数组 nums. nums的一个子数组如果满足以下条件
 * 那么它是不间断的
 * i，i + 1 ，...，j  表示子数组中的下标。
 * 对于所有满足 i <= i1, i2 <= j 的下标对，都有 0 <= |nums[i1] - nums[i2]| <= 2 。
 * 请你返回 不间断 子数组的总数目。
 * 子数组是一个数组中一段连续 非空 的元素序列。
 *
 * 输入 nums=[5,4,2,4]
 * 输出:8
 *
 * 解释:
 * 大小为1的不间断子数组 [5], [4], [2], [4]
 * 大小为2的不间断子数组 [5,4], [4,2], [2,4]
 * 大小为3的不间断子数组 [4,2,4]
 * 没有大小为 4 的不间断子数组。
 * 不间断子数组的总数目为 4 + 3 + 1 = 8 。
 * 除了这些以外，没有别的不间断子数组。
 *
 * 输入：nums = [1,2,3]
 * 输出：6
 * 大小为 1 的不间断子数组：[1], [2], [3] 。
 * 大小为 2 的不间断子数组：[1,2], [2,3] 。
 * 大小为 3 的不间断子数组：[1,2,3] 。
 * 不间断子数组的总数目为 3 + 2 + 1 = 6 。
 *
 */

var continuousSubarrays = function (nums) {
  // i,j 代表窗口的左右端点, ans是累加的结果值
  let i = 0;
  let j = 0;
  let ans = 0;

  // 单调递增序列维护窗口最小值，单调递减序列维护窗口最大值
  let minQ = [];
  let maxQ = [];
  while (j < nums.length) {
    // 如果不满足单调递增，需要舍弃 (后面的元素更大，前面较小的元素就没有必要维护)
    while (minQ.length && minQ[minQ.length - 1] > nums[j]) {
      minQ.pop();
    }
    // 如果不满足单调递减，需要舍弃(后面的元素更小，前面较小的元素就没有必要维护)
    while (maxQ.length && maxQ[maxQ.length - 1] < nums[j]) {
      maxQ.pop();
    }

    // 插入新元素
    minQ.push(nums[j]);
    maxQ.push(nums[j]);

    // 缩小左端点
    while (minQ.length && maxQ.length && maxQ[0] - minQ[0] > 2) {
      if (minQ[0] == nums[i]) {
        minQ.shift();
      }
      if (maxQ[0] == nums[i]) {
        maxQ.shift();
      }
      i++;
    }
    ans += j - i + 1;
    j++;
  }

  return ans;
};
