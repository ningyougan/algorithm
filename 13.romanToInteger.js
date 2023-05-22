/*
 * @Description: 罗马数字转整数
 * @Author: ningyg
 */

/**
 * @description: 一般方法  TC:O(n)  SC:O(1)
 * @author: ningyg
 * @param {*} s 输入的roman字符串
 * @return {*}
 */

function normal(s) {
  const mark = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;
  let last = 0;
  for (let i = s.length; i >= 0; i--) {
    const value = mark[s[i]];
    if (value >= last) num += value;
    else num -= value;
    last = value;
  }
  return num;
}
