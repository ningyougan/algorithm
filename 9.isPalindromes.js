/*
 * @Description: 给你一个整数x，如果x是一个回文整数，返回true；否则返回false。
 * @Author: ningyg
 */

/**
 * @description: 翻转法    TC:O(n)  SC:O(1)
 * @author: ningyg
 * @param {*} xString
 * @return {*}
 */

function onTurn(x) {
  let onTurnParam = '';
  
  xString = x.toString();
  for (y of param) {
    onTurnParam = y + onTurnParam;
  }
  return xString == onTurnParam;
}
