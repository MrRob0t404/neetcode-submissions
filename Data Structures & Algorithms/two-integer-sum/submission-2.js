class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let complement = {};

        for (let i = 0; i < nums.length; i++) {
            if (complement[(target - nums[i])] !== undefined) {
                return [complement[target - nums[i]], i]
            } else {
                complement[nums[i]] = i;
            }
        }
        return false;
    }
}
