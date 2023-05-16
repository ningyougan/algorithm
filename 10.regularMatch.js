/*
 * @Description: 给你一个字符串s和一个字符串p，请你来实现一个支持'.'和'*'的正则表达式匹配。
                    1.'.' 匹配任意单个字符
                    2.'*' 匹配零个或多个前面的那一个元素
                 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 * @Author: ningyg
 */

/**
 * @description: 动态规划   TC:O(n^2)  SC:O(n^2)
 * @author: ningyg
 * @param {*} s  需要匹配的字符串
 * @param {*} p  字符串规则
 * @return {*}
 */

const isMatch = (s, p) => {
  if (s == null || p == null) return false;

  const sLen = s.length, pLen = p.length;

  const dp = new Array(sLen + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
  }
  // base case
  dp[0][0] = true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
  }
  // 迭代
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {

      if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {
        if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
};

// https://leetcode.cn/problems/regular-expression-matching/solution/shou-hui-tu-jie-wo-tai-nan-liao-by-hyj8/
