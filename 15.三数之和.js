/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  return nSumTarget(nums, 3, 0, 0);
};
var nSumTarget = function (nums, n, start, target) {
  var sz = nums.length;
  var res = [];
  if (n < 2 || sz < n) return res;
  if (n == 2) {
    let lo = start,
      hi = sz - 1;
    while (lo < hi) {
      var sum = nums[lo] + nums[hi];
      var left = nums[lo],
        right = nums[hi];
      if (sum < target) {
        while (lo < hi && nums[lo] == left) lo++;
      } else if (sum > target) {
        while (lo < hi && nums[hi] == right) hi--;
      } else {
        res.push([left, right]);
        while (lo < hi && nums[lo] == left) lo++;
        while (lo < hi && nums[hi] == right) hi--;
      }
    }
  } else {
    for (var i = start; i < sz; i++) {
      var sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
      for (var j = 0; j < sub.length; j++) {
        sub[j].push(nums[i]);
        res.push(sub[j]);
      }
      while (i < sz - 1 && nums[i] == nums[i + 1]) i++;
    }
  }
  return res;
};
// @lc code=end
