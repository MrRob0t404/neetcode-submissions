class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = {};
        for (let i = 0; i < nums.length; i++) {
            if (res[target - nums[i]] !== undefined) {
                return [res[target - nums[i]], i];
            } else {
                res[nums[i]] = i
            }
        }
    }
}
