/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode.cn/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (44.89%)
 * Likes:    1390
 * Dislikes: 0
 * Total Accepted:    467.1K
 * Total Submissions: 1M
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 *
 * 返回这三个数的和。
 *
 * 假定每组输入只存在恰好一个解。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,0], target = 1
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length < 3) return 0;

  nums.sort((a, b) => a - b);
  let delta = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 2; i++) {
    let sum = nums[i] + twoSumClosest(nums, i + 1, target - nums[i]);
    if (Math.abs(delta) > Math.abs(target - sum)) {
      delta = target - sum;
    }
  }
  return target - delta;
};

let twoSumClosest = function (nums, start, target) {
  let lo = start,
    hi = nums.length - 1;
  let delta = Number.MAX_SAFE_INTEGER;
  while (lo - hi) {
    let sum = nums[lo] + nums[hi];
    if (Math.abs(delta) > Math.abs(target - sum)) {
      delta = target - sum;
    }
    if (sum < target) {
      lo++;
    } else {
      hi--;
    }
  }
  return target - delta;
};
// @lc code=end
