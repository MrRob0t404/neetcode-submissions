class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;

        let uniqueNums = new Set(nums);
        let longest = 0;

        for (let num of uniqueNums) {
            if (!uniqueNums.has(num - 1)) {
                let length = 0;
                while (uniqueNums.has(num + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
