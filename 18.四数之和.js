/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);

  return nSumTarget(nums, 4, 0, target);
};

var nSumTarget = function (nums, n, start, target) {
  let sz = nums.length;
  let res = [];
  if (n < 2 || sz < n) return res;
  if (n === 2) {
    let lo = start,
      hi = sz - 1;
    while (lo < hi) {
      let sum = nums[lo] + nums[hi];
      let left = nums[lo],
        right = nums[hi];
      if (sum < target) {
        while (lo < hi && nums[lo] === left) lo++;
      } else if (sum > target) {
        while (lo < hi && nums[hi] === right) hi--;
      } else {
        res.push([left, right]);
        while (lo < hi && nums[lo] === left) lo++;
        while (lo < hi && nums[hi] === right) hi--;
      }
    }
  } else {
    for (let i = start; i < sz; i++) {
      var sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
      for (var arr of sub) {
        // (n-1)Sum 加上 nums[i] 就是 nSum
        arr.push(nums[i]);
        res.push(arr);
      }
      while (i < sz - 1 && nums[i] === nums[i + 1]) i++;
    }
  }
  return res;
};
// @lc code=end
