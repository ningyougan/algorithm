/*
 * @Description: 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
                 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。返回容器可以储存的最大水量。
 * @Author: ningyg
 */

/**
 * @description: 暴力破解方法  TC:O(n^2)  SC:O(1)
 * @author: ningyg
 * @param {*} height 输入的高度数组
 * @return {*}
 */

function bruteForce(height) {
  let maxSquare;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let square = (j - i) * Math.min(height[i], height[j]);
      if (square > maxSquare) maxSquare = square;
    }
  }
  return maxSquare;
}

function doublePoint(height){
  let left=0
  let right=height.length-1
  let maxArea=0
  while(right>left)
  {
     let tempArea=(right-left)*Math.min(height[right],height[left])
     if(tempArea>maxArea)maxArea=tempArea
     if(height[right]>height[left])left++
     else right--
  }
  return maxArea
  /**
   * 为什么双指针的做法是正确的？
   * 双指针代表的是可以作为容器边界的所有位置的范围。在一开始，双指针指向数组的左右边界，
   * 表示数组中所有的位置都可以作为容器的边界，因为我们还没有进行过任何尝试。在这之后，
   * 我们每次将对应的数字较小的那个指针往另一个指的方向移动一个位置，就表示我们认为这
   * 个指针不可能再作为容器的边界了。
   * 
   * 当某一边界确定时，则它为短期内的极大值，即使后续遇见更大值，其前一极大值与当前边界值
   * 已组成了最高的高
   */
}