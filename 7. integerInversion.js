/*
 * @Description: 给你一个32位的有符号整数x ，返回将x中的数字部分反转后的结果。如果反转后整数超过32位的有
                 符号整数的范围 [−2^31,  2^31 − 1]，就返回0。
 * @Author: ningyg
 */

/**
 * @description: 利用字符串进行翻转  TC:O(n)  SC:O(1)
 * @author: ningyg
 * @param {*} x  给定数值
 * @return {*}
 */

function stringInversion(x) {
  let isGreateZero = x >= 0;
  // 数值范围[-2^31,2^31-1]，由于上方已判断正负，此处剔除了负号，后续好作比较
  let maxString = isGreateZero ? '2147483647' : '2147483648';
  // 如果大于等于零则全部转换为字符串，如果小于零，则转换字符串后剔除负号
  let xString = isGreateZero ? x.toString() : x.toString().substring(1);
  if (xString.length > maxString.length) return 0;

  let isCompare = false;
  // 当x长度等于maxString的长度时，翻转时才需要比较
  if (xString.length === maxString.length) isCompare = true;

  let reverseString = '';
  for (let i = xString.length - 1; i >= 0; i--) {
    if (isCompare) {
      // 如果当前字符数值大于最大范围的数值，证明已超出数值范围，直接返回0
      if (xString[i] > maxString[maxString.length - i - 1]) return 0;
      // 如果当前字符小于最大范围的数值，证明翻转后数值仍小于数值范围，后续无需再进行比较
      if (xString[i] < maxString[maxString.length - i - 1]) isCompare = false;
    }
    reverseString += xString[i];
  }
  return isGreateZero ? reverseString * 1 : reverseString * -1;
}
