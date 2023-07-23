/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 *
 * 示例:
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 *
 * 1.这道题目的前提是数组为有序数组，同时题目还强调数组中无重复元素
 * 2.对区间的定义没有想清楚，区间的定义就是不变量
 * 3.写二分法，区间的定义一般为两种，左闭右闭即[left, right]，或者左闭右开即[left, right)。
 *
 *
 */

/**
 * 二分法第一种写法
 * 第一种写法，我们定义target是在一个左闭右闭的区间里，也就是[left,right] (这个很重要非常重要)
 *
 * 区间的定义这就决定了二分法的代码
 *
 */
var search = function (nums, target) {
  // right是数组最后一个数的下标, num[right] 在查找范围内, 是左闭右闭区间
  let mid;
  let left = 0;
  let right = nums.length - 1;
  // 当left = right 时, 由于nums[right]在查找范围内,所以要包括此情况。
  while (left <= right) {
    // 位运算 + 防止大数溢出
    mid = left + ((right - left) >> 1);
    // 如果中间数大于且目标值，要把中间数排除查找范围，所以右边界更新为mid-1
    // 如果右边界更新为mid，那中间数还在下次查找范围内
    if (nums[mid] > target) {
      right = mid - 1; // 去左面闭区间寻找
    } else if (nums[mid] < target) {
      left = mid + 1; // 去右面闭区间寻找
    } else {
      return mid;
    }
  }
  return -1;
};

/**
 * 二分法第二种写法
 */

var search2 = function (nums, target) {
  // right是数组最后一个数的下标+1 ，nums[right]不在查找范围内，是左闭右开区间。
  let mid,
    left = 0,
    right = nums.length;
  // 当left = right 时，由于nums[right]不在查找范围，所以不必包括此情况。
  while (left < right) {
    // 位运算+防止大数溢出
    mid = left + ((right - left) >> 1);
    // 如果中间值大于目标值。中间值不应该在下次查找的范围内，但中间值的前一个值应在。
    if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};



