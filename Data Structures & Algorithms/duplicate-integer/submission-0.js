class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let setOfNums = new Set(nums)

        if(setOfNums.size !== nums.length){
            return true; 
        }

        return false; 
    }
}
