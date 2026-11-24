class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count the frequency
        let freq = {};
        for (let i = 0; i < nums.length; i++) {
            if (freq[nums[i]]) {
                freq[nums[i]] = freq[nums[i]] + 1;
            } else {
                freq[nums[i]] = 1;
            }
        }

        let result = new Array(nums.length)
        for (let key in freq) {
            if (result[freq[key]] !== undefined) {
                result[freq[key]].push(key);
            } else {
                result[freq[key]] = [parseInt(key)];
            }
        }

        let answer = [], count = k;
        for (let i = result.length; i >= 0; i--) {
            if (result[i] !== undefined) {
                if (count < 1) {
                    break;
                }
                answer.push(result[i]);
                count = count - result[i].length;
            }
        }
        console.log(answer)
        return answer;
    }
}
