class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        let charSet = new Set();
        let left = 0;

        if (s.length === 0) return 0;
        if (s.length === 1) return 1;
        for (let i = 0; i < s.length; i++) {
            while (charSet.has(s[i])) {
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[i]);
            max = Math.max(max, i - left + 1);

        }

        return max;
    }
}
