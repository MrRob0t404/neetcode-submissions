class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqCount = {}
        for (let i = 0; i < nums.length; i++) {
            if (freqCount[nums[i]] !== undefined) {
                return true; 
            } else {
                freqCount[nums[i]] = 1; 
            }
        }

        return false; 
    }
}
