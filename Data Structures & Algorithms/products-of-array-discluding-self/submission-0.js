class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let post = [], pre = [], result = [];
        pre[0] = nums[0];
        post[nums.length - 1] = nums[nums.length - 1];

        // build post fix array
        for (let i = 1; i < nums.length; i++) {
            pre[i] = pre[i - 1] * nums[i];
        }

        // build post fix array
        for (let i = nums.length - 2; i >= 0; i--) {
            post[i] = post[i + 1] * nums[i];
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] = (post[i + 1] ?? 1) * (pre[i - 1] ?? 1);
        }
        
        return result;
    }
}
