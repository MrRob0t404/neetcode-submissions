class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0, end = heights.length - 1, currMax = 0;
        while (start < end) {
            let area = (end - start) * Math.min(heights[start], heights[end]);
            currMax = Math.max(area, currMax)

            if (heights[start] > heights[end]) {
                end--
            } else {
                start++;
            }
        }
        return currMax;
    }
}


