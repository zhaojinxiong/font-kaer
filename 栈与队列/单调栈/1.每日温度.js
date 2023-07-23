/**
 * 每日温度
 * 请根据每日气温列表，重新生成一个列表。 对应位置的输出为:
 * 要想观察到更高的气温，至少需要等待的天数。
 * 如果气温在这之后都不会升高，请在该位置用0来代替。
 *
 *
 * 输入 [73,74,75,71,69,72,76,73]
 * 输出 [1,1,4,2,1,1,0,0]
 */

var solutions = (nums) => {
  let tmpArr = [...nums];

  let res = [];
  for (let i = 0; i < tmpArr.length; i++) {
    let item = 0;
    for (let j = i + 1; j < tmpArr.length; j++) {
      if (tmpArr[j] - tmpArr[i] > 0) {
        item = j - i;
        break;
      }
    }
    res.push(item);
  }
  return res;
};

console.log("xxx", solutions([73, 74, 75, 71, 69, 72, 76, 73]));

/**
 * 思路
 * 怎么想到用单调栈呢? 什么时候用单调栈
 * 通常是一维数组，要寻找任一个元素的右边或者左边第一个比自己大或者小的元素的位置，
 * 此时我们就要想到可以用单调栈了. 时间复杂度为O(n)
 * 就是可以找到每一个元素的右边第一个比它大的元素位置呢?
 * 单调栈的本质是空间换时间, 因为在遍历的过程中需要用一个栈来记录右边第一个比当前元素高的元素。
 * 优点是整个数组只需要遍历一次。
 *
 * 更直白来说，就是用一个栈来记录我们遍历过的元素，
 *
 * 1.单调栈里面存放的元素是什么？
 * 2.单调栈里的元素是递增呢？还是递减呢？
 *
 *
 *
 *
 */

var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const res = Array(n).fill(0);
  const stack = []; // 递增栈: 用于存储元素右面第一个比他大的元素下标
  stack.push(0);
  for (let i = 1; i < n; i++) {
    // 栈顶元素
    const top = stack[stack.length - 1];
    if (temperatures[i] < temperatures[top]) {
      stack.push(i);
    } else if (temperatures[i] === temperatures[top]) {
      stack.push(i);
    } else {
      while (stack.length && temperatures[i]) {
        const top = stack.pop();
        res[top] = i - top;
      }
      stack.push(i);
    }
  }
  return res;
};

var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const res = Array(n).fill(0);
  const stack = []; // 递增栈：用于存储元素右面第一个比他大的元素下标
  stack.push(0);
  for (let i = 1; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
};
