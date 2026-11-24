class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length < 3) return [0,1]; 

        let sums = {}; 
        for(let i = 0; i < nums.length; i++){ 
            if(sums[target - nums[i]] === undefined){ 
                sums[nums[i]] = i;             
            }else{ 
                return [sums[target - nums[i]], i];
            }
        }
    }
}
