class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let results = new Set(); 
        nums.sort((a,b)=> a-b)
        for(let a = 0; a < nums.length; a++){ 
            for(let b = a + 1; b < nums.length; b++){
                for(let c = b + 1; c < nums.length; c++){
                    if (nums[a] + nums[b] + nums[c] === 0){ 
                        results.add(JSON.stringify([nums[a],nums[b],nums[c]])); 
                    }
                } 
            }
        }

        return Array.from(results).map(item => JSON.parse(item)); 
    }
}
