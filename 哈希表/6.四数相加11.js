/***
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，
 * 使得 A[i] + B[j] + C[k] + D[l] = 0。
 * 
 * 例如:

    输入:

    A = [ 1, 2]
    B = [-2,-1]
    C = [-1, 2]
    D = [ 0, 2]
    输出:

    2
 * 
    本题解题步骤:
    1. 首先定义一个unordered_map  key放a和b两数之和，value 放a和b两数之和出现的次数。
    2. 遍历A和大B数组，统计两个数组元素之和, 和出现的次数，放到map中。
    3. 定义int变量 count, 用来统计a+b+c+d = 0 出现的次数。
    4. 在遍历大C和大D数组，找到如果 0 - (c+d) 在map中出现过的话, 就用count把map中key对应的value也就是出现
    次数统计出来。

    5. 最后返回统计值count就可以了。
 * 
 */

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const twoSumMap = new Map();
  let count = 0;
  // 统计nums1和nums2数组元素之和，和出现的次数，放到map中
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const sum = n1 + n2;
      twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1);
    }
  }

  // 找到如果 0 -(c+d) 在map中出现过的话，就把map中key对应value也就是出现次数统计出来
  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4;
      count += twoSumMap.get(0 - sum) || 0;
    }
  }

  return count;
};
