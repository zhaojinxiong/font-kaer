/**
 * 滑动窗口最大值
 *
 * 力扣超时
 */

const solution = (arr, k) => {
  let tmpArr = [...arr];
  let res = [];
  let getMax = (arrParam) => {
    let maxValue = -Infinity;
    arrParam.forEach((element) => {
      if (maxValue < element) {
        maxValue = element;
      }
    });
    return maxValue;
  };
  for (let i = 0; i < tmpArr.length - k + 1; i++) {
    let itemArr = tmpArr.slice(i, i + k);
    res.push(getMax(itemArr));
  }

  return res;
};

console.log("solution", solution([1, -1], 1));

/**
 * 思路:其实队列没有必要维护窗口里的所有元素，只需要维护有可能成为窗口里最大值的元素就可以了，
 * 同时保证队列里的元素数值是由大到小的。
 *
 * 那么这个维护元素单调性递减的队列就叫做单调队列，即单调递减或单调递增的队列
 * pop(value) 如果窗口移除的元素value等于单调队列的出口元素，那么队列弹出元素，否则不用任何操作。
 *
 * push(value) 如果push的元素value 大于入口元素的数值，那么就将队列入口的元素弹出，直到push元素的数值
 * 小于等于队列入口元素的数值为止。
 *
 * 保持如上规则，每次窗口移动的时候，只要问que.front() 就可以返回当前窗口的最大值。
 *
 *其实，大家可以自己观察一下单调队列的实现，
  nums 中的每个元素最多也就被 push_back 和 pop_back 各一次，没有任何多余操作，所以整体的复杂度还是 O(n)。
  空间复杂度因为我们定义一个辅助队列，所以是O(k)。

 *
 */

var maxSlidingWindow = function (nums, k) {
  class MonoQueue {
    constructor() {
      this.queue = [];
    }
    enqueue(value) {
      let back = this.queue[this.queue.length - 1];
      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }
    dequeue(value) {
      let queueTop = this.front();
      if (value === queueTop) {
        this.queue.shift();
      }
    }

    front() {
      return this.queue[0];
    }
  }

  let i = 0;
  let j = 0;
  let resArr = [];
  let heaplerQueue = new MonoQueue();
  while (j < k) {
    heaplerQueue.enqueue(nums[j]);
    j++;
  }
  resArr.push(heaplerQueue.front());
  while (j < nums.length) {
    heaplerQueue.dequeue(nums[i]);
    heaplerQueue.enqueue(nums[j]);
    resArr.push(heaplerQueue.front());
    i++;
    j++;
  }

  return resArr;
};

/**
 *
 * 在上述滑动窗口形成及移动的过程中, 我们注意到元素是从窗口的右侧进入的，
 * 然后由于窗口大小是固定的，因此多余的元素是从窗口的左侧移除的.
 * 一端进入，另一端移除，这不就是队列的性质吗?
 *
 * 所以，该题目可以借助队列来求解
 *
 *
 * 元素5入队
 * 继续考察第二个元素3，此时3小于队列末尾的元素5，因此元素3入队，以便
 * 看其是否是下一个窗口的最大值。 这时队列中元素从队首到队尾是递减的。
 *
 * 接着考察[5,3,4,1]中的第三个元素4，此时4大于队尾元素3，这表明元素3
 * 不可能是窗口[5,3,4]中的最大元素,因此需要将其从队列移除。 但队首有元素5存在
 * 因此不能将其从队首移除，那怎么办呢? 我们可以将其从队尾移除。
 *
 * 对于这种一端既可以有元素入队，又有元素出队的队列，称之为双向队列。
 *
 * 队尾元素3出队之后,由于新的队尾元素5大于当前考察元素4，因此元素4入队，以便
 * 看其是否是下一个窗口的最大值。
 *
 * 当元素4入队之后，我们发现这时， 队列元素从队首到队尾依旧是递减的.
 *
 * 我们把从队首到队尾单调递减或递增的队列称称之为单调队列。
 *
 *
 * 1.我们确保 一点队首元素一定是当前滑动窗口的最大值。
 * 2.当滑动窗口左侧下标 值大于等于 队首元素下标时 继续滑动需要移除队首元素。
 * 3. 新元素进入队列 处理队列 保持单调性 对不符合单调性的数据进行移除。
 * 总结：当我们要维护数组中的某个最值(最大值，最小值，和最大，乘积最大...)时，往往就可以使用单调队列！！！
 */

var maxSlidingWindow = function (nums, k) {
  class MonoQueue {
    constructor() {
      this.queue = [];
    }

    enqueue(index, nums) {
      let back = this.queue[this.queue.length - 1];
      let backValue = nums[back];
      while (backValue !== undefined && backValue < nums[index]) {
        this.queue.pop();
        backValue = nums[this.queue[this.queue.length - 1]];
      }
      this.queue.push(index);
    }

    dequeue(index) {
      let swIndex = this.front();
      if (index >= swIndex) {
        this.queue.shift();
      }
    }

    front() {
      return this.queue[0];
    }
  }

  let i = 0;
  let j = 0;
  let resArr = [];
  let heaplerQueue = new MonoQueue();

  while (j < k) {
    heaplerQueue.enqueue(j, nums);
    j++;
  }

  resArr.push(nums[heaplerQueue.front()]);
  while (j < nums.length) {
    heaplerQueue.enqueue(j, nums);
    heaplerQueue.dequeue(i);
    resArr.push(nums[heaplerQueue.front()]);
    i++;
    j++;
  }

  return resArr;
};

var maxSlidingWindow = function (nums, k) {
  const queue = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // 如果队列不为空，且要入队的元素大于队尾的元素，队尾元素出队
    while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);

    // j是把i为作为滑动窗口最后一个值时滑动窗口第一个值的索引
    const j = i - k + 1;
    // j >= 0 说明滑动窗口已构建完毕
    if (j >= 0) {
      // 当队首元素不属于当前滑动窗口时出队
      if (queue[0] < j) queue.shift();
      // 把队首元素添加到结果数组中
      result.push(nums[queue[0]]);
    }
  }
  return result;
};
