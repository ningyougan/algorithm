/*
 * @Description: 查找字符串数组中的最长公共前缀，如果不存在公共前缀，返回空字符串。
 * @Author: ningyg
 */

/**
 * @description: 纵向比较法  TC:O(n^2) SC:O(1)
 * @author: ningyg
 * @param {*} strs 输入的字符串数组
 * @return {*}
 */

function longitudinalComparison(strs) {
  let index = 0;
  let commonPrefix = '';
  while (strs[0][index]) {
    let currentCharacter = str[0][index];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][index] == undefined || strs[i][index] != currentCharacter)
        return commonPrefix;
    }
    commonPrefix += currentCharacter;
    index++;
  }
  return commonPrefix;
}
