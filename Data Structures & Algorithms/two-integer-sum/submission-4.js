class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let countIndex = {};

        for (let i = 0; i < nums.length; i++) {
            if (countIndex[target - nums[i]] === undefined) {
                countIndex[nums[i]] = i
            } else {
                return [countIndex[target - nums[i]], i];
            }
        }
      
        return false;
    }
}
