/**
 * @param {string} s
 * @return {string}
 */

// 暴力解
// 遍历每一个范围i到j 判断回文。取其中最大值即可
// O(n ^ 3)的复杂度
// var longestPalindrome = function(s) {
//     if(s.length == 1) return s
//     var len = s.length
//     var res = ''
//     var max = 0
//     for(var i = 0 ; i < len ; i ++) {
//         var temp = ''
//         for(var j = i; j< len ; j ++) {
//             temp += s[j]
//             if(isPalindrome(temp)) {
//                 if(temp.length > max) {
//                     max = temp.length
//                     res = temp
//                 }
//             }
//         }
//     }
//     function isPalindrome(str){
//         var left = 0 , right = str.length - 1
//         while(left <= right) {
//             if(str[left++] !== str[right--]) {
//                 return false
//             }
//         }
//         return true
//     }
//     return res
// };

// 这种方法字符串的每个元素进行扩展

// 例如 aba
// 从a这个点往左往右走，找到最大的回文范围。
// 从b这个点往左往右走，找到最大的回文范围
// 从a这个点往左往右走，找到最大的回文范围

// 然后记录最右最左  用于获取字符串。
// 记录一个max值。

var longestPalindrome = function(s) {
    var res = ''
    
    function checkAsPointer(s, left, right){
        while(left >=0 && right < s.length && s[left] === s[right]) {
            left --
            right ++
        }
        return right - left - 1
    }
    var start = 0 , end = 0
    var max = 1
    for(var i = 0 ; i < s.length ; i ++) {
        var len1 = checkAsPointer(s, i, i)
        var len2 = checkAsPointer(s, i, i + 1)
        var len = Math.max(len1, len2)
        if(len % 2 === 0 && len > end - start) {
            start = i - (((len - 1) / 2 ) | 0)
            end = i + (((len / 2) | 0))
            max = end - start
        }else if(len % 2 === 1 && len > end - start) {
            start = i - (((len )/ 2 ) | 0) 
            end = i + (((len ) / 2)  | 0)
            max = end - start
        }
    }
    return s.substr(start, max + 1)
}