class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = {}; 
        for (let i = 0; i < nums.length; i++) {
            if (freq[nums[i]]) {
                freq[nums[i]] = freq[nums[i]] + 1;
            } else {
                freq[nums[i]] = 1;
            }
        }

        for (let num in freq) {
            if (freq[num] > 1) return true;
        }
        return false;
    };
}
