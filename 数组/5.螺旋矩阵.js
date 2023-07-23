/**
 * 螺旋矩阵II
 *
 * 给定一个正整数n, 生成一个包含1到n^2所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 *
 * 示例:
 * 输入3 输出[[1,2,3],[8,9,4],[7,6,5]]
 *
 * 思路
 * 本地并不涉及到什么算法，就是模拟过程，但却十分考察对代码的掌控能力。
 *
 * 坚持循环不变量原则。
 *
 * 模拟顺时针画矩阵的过程。
 *
 * 填充 上行从左到右
 * 填充 右列从上到下
 * 填充 下行从右到左
 * 填充 左列从下到上
 *
 * 由外向内一圈一圈这么画下去。
 *
 *
 */

var generateMatrix = function (n) {
  let startX = 0; // 起始位置
  let startY = 0;

  let loop = Math.floor(n / 2); // 旋转圈数
  let mid = Math.floor(n / 2); // 中间位置
  let offset = 1; // 控制每一层填充元素个数
  let count = 1; // 更新填充数字

  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let row = startX;
    let col = startY;
    // 上行从左到右 (左闭右开)
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++;
    }

    // 右列从上到下 (左闭右开)
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    }

    // 下行从右到左 (左闭右开)
    for (; col > startY; col--) {
      res[row][col] = count++;
    }

    // 左列做下到上(左闭右开)
    for (; row > startX; row--) {
      res[row][col] = count++;
    }

    // 更新起始位置
    startX++;
    startY++;

    // 更新offset
    offset += 2;
  }
  // 如果n为奇数的
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
};

let res = generateMatrix(3);

console.log("res", res);
