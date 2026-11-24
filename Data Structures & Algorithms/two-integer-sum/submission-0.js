class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // if (nums.length === 2 && (nums[0] + nums[1] === target)) {
        //     return [0, 1];
        // }

        // we want to store the index's and the number we need to make the target
        let results = {};
        for (let i = 0; i < nums.length; i++) {
            let currProd = target - nums[i]
            if (results[currProd] !== undefined) {
                return [results[target - nums[i]], i];
            } else {
                results[nums[i]] = i;
            }
        }
    }
}
