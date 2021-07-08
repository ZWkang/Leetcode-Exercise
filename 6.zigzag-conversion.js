/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

 // 找规律 

 // 对于每个竖列
 // https://www.cnblogs.com/grandyang/p/4128268.html

 // 竖列的每个元素 2*nRows - 2
 // 红色元素的位置  j + 2 x numRows-2 - 2 x i,
var convert = function(s, numRows) {
    if(s.length === 1 || numRows === 1) return s
    var len = numRows
    var stringLength = s.length
    var result = ''
    var size = 2 * numRows - 2
    for(var i = 0 ; i < len; i ++) {
        for(var j = i ; j < stringLength ; j += size){
            result += s[j]
            var tmp = j + size - 2 * i;
            if (i != 0 && i != numRows - 1 && tmp < s.length) {
                result += s[tmp]
            }
        }
    }
    return result
};