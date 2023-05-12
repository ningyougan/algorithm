/*
 * @Description: 将字符串转换成一个 32 位有符号整数，并满足以下要求：
                 1.读入字符串并丢弃无用的前导空格(' ')
                 2.检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 
                   确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
                 3.读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余
                   部分将被忽略。
                 4.将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。
                   如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
                 5.如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，
                   使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于
                   231 − 1 的整数应该被固定为 231 − 1 。
                 6.返回整数作为最终结果。
 * @Author: ningyg
 */
/**
 * @description: 一般方法  TC:O(n)  SC:O(1)
 * @author: ningyg
 * @param {*} s  输入字符串
 * @return {*}
 */
function myAtoi(s) {
  const mark = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ' ',
    '-',
    '+',
  ];
  let isMatched = false;
  let count = 0,
    plusOrMinus;
  for (let i = 0; i < s.length; i++) {
    const markIndex = mark.indexOf(s[i]);
    if (markIndex === -1 || (isMatched && markIndex >= 0))
      return count * plusOrMinus;
    if (markIndex === 10) continue;
    isMatched = true;
    if (markIndex >= 11) plusOrMinus == 11 ? -1 : 1;
    else {
      const currentCount = s[i] * 1;
      const tempCount = count * plusOrMinus;
      if (tempCount > 214748364 || (tempCount == 214748364 && currentCount > 7))
        return 2147483647;
      else if (
        tempCount < -214748364 ||
        (tempCount == -214748364 && currentCount > 8)
      )
        return -2147483648;
      count = count * 10 + currentCount;
    }
  }
  return count * plusOrMinus;
}
