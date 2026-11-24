class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;
        if (s.length === 1) return 1;

        let charSet = new Set(), left = 0, max = -Infinity;
        for (let i = 0; i < s.length; i++) {
            while (charSet.has(s[i])) {
                charSet.delete(s[left])
                left++;
            }
            charSet.add(s[i]);
            max = Math.max(i - left + 1, max);
        }

        return max;
    }
}
