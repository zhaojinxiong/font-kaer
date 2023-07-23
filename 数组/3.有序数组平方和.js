/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
 * nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]
 *
 * 暴力排序
 * 这个时间复杂度是 O(n + nlogn)， 可以说是O(nlogn)的时间复杂度，
 * 但为了和下面双指针法算法时间复杂度有鲜明对比，我记为 O(n + nlog n)。
 *
 *
 * 双指针法
 * 数组其实是有序的，只不过负数的平方之后可能成为最大数了。
 * 那么数组平方的最大值就再数组的两端，不是最左边就是最右边，不可能是中间。
 *
 * 此时可以考虑双指针法，i指向起始位置,j指向终止位置。
 * 定义一个新数组result 和A数组一样的大小，让K指向result 数组终止位置。
 * 如果 A[i]*A[i] < A[j]*A[j] 那么result[k--] = A[j] * A[j];
 * 如果 A[i]*A[i] >= A[j]*A[j] 那么result[k--] = A[i] * A[i];
 *
 */

var sortedSquares = function (nums) {
  let n = nums.length;
  let res = new Array(n).fill(0);
  let i = 0,
    j = n - 1,
    k = n - 1;
  while (i <= j) {
    let left = nums[i] * nums[i];
    let right = nums[j] * nums[j];

    if (left < right) {
      res[k--] = right;
      j--;
    } else {
      res[k--] = left;
      i++;
    }
  }
  return res;
};
