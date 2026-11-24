class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let currArea = 0;
        let right = 0, left = 1
        let currMax = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let min = Math.min(heights[j], heights[i])
                let area = (j - i) * min

                currMax = Math.max(area, currMax)
            }
        }
        return currMax; 
    }
}


