class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = {};

        for (let i = 0; i < nums.length; i++) {
            if (freq[nums[i]] === undefined) {
                freq[nums[i]] = 1;
            } else {
                freq[nums[i]] = freq[nums[i]] + 1;
            }
        }

        for (let nums in freq) {
            if (freq[nums] > 1) {
                return true;
            }
        }
        return false;
    }
}
