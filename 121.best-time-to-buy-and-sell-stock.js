/**
 * @param {number[]} prices
 * @return {number}
 */
// Brute Force

// 暴力
// 遍历所有情况  每次比对买入与卖出
// 与空仓情况 0 做比较
// var maxProfit = function(prices) {
//     var len = prices.length
//     var maxProfit = 0
//     for(var i = 0 ; i < len ; i ++) {
//         for(var j = i + 1 ; j < len ; j ++) {
//             if(prices[j] - prices[i] > maxProfit) {
//                 maxProfit = prices[j] - prices[i]
//             }
//         }
//     }
//     return maxProfit
// };

// 记录最低股价的一天
// 比对 出 最大收益
// 然后取最大收益
var maxProfit = function (prices){
    var minPrice = Infinity
    var maxPrice = 0
    for(var i = 0 ; i < prices.length; i ++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i]
        } else if(prices[i] - minPrice > maxPrice) {
            maxPrice = prices[i] - minPrice
        }
    }
    return maxPrice
}