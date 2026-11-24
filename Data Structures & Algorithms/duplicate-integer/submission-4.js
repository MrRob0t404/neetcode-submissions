class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length < 1) return false; 

        let freq = this.countFreq(nums);
        
        for(let nums in freq){
            if(freq[nums] > 1) return true; 
        }
        return false; 
    }

    countFreq(arr) {
        let freq = {};
        for (let i = 0; i < arr.length; i++) {
            if (freq[arr[i]] !== undefined) {
                freq[arr[i]] = freq[arr[i]] + 1
            } else {
                freq[arr[i]] = 1;
            }
        }
        return freq;
    }
}
