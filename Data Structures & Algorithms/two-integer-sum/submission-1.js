class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length === 2 && nums[0] + nums[1] === target) return [0,1]

        let indexes = {} 
        for(let i = 0; i < nums.length; i++){
            console.log("before check:", target - nums[i])
            if(indexes[(target - nums[i])] !== undefined){
                return [i, indexes[(target - nums[i])]]; 
            }else{ 
                indexes[nums[i]] = i 
            }
        }
        console.log(indexes)
    }
}
