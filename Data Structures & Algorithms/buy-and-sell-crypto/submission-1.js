class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let start = 0, end = 1, maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[start] < prices[end]) {
                maxProfit = Math.max(maxProfit, prices[end] - prices[start]);
                end++;
            }

            if (prices[start] >= prices[end]) {
                start = end;
                end++;
            }
        }

        return maxProfit;
    }
}
