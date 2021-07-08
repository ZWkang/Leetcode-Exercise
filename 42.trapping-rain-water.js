/**
 * @param {number[]} height
 * @return {number}
 */

 // 使用额外的存储空间
 // 记录每一个点 相对于左边来说最高点
 // 记录每一个点 相对于右边来说最高点
 // 计算每一个点与 [左右较低点] 之差
 // 以上计算的点之差 与 最低水位0 取较大值

 // 返回整个蓄水量 
var trap = function(height) {
    var left = []
    var right = []
    var tempMax = 0
    for(var i = 0 ; i < height.length ; i ++) {
        left[i] = tempMax
        if(tempMax <= height[i]) {
            tempMax = height[i]
        }
    }
    var rightMax = 0
    for(var i = height.length - 1 ; i >= 0 ; i --) {
        right[i] = rightMax
        if(rightMax <= height[i]) {
            rightMax = height[i]
        }
    }
    
    var sumArr = []
    
    for(var i = 0 ; i < height.length  ; i ++){
        sumArr[i] = Math.max(0,  Math.min(left[i], right[i]) - height[i])
    }
    var res = sumArr.reduce((a, b )=>{ 
        return a + b
    }, 0)
    return res
};