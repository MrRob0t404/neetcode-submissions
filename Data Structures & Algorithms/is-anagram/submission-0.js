class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let freq = {};
        for (let i = 0; i < s.length; i++) {
            if (freq[s[i]]) {
                freq[s[i]] = freq[s[i]] + 1;
            } else {
                freq[s[i]] = 1;
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (!freq[t[i]]) return false;
            if (freq[t[i]] && freq[t[i]] > 0) {
                freq[t[i]] = freq[t[i]] - 1;
            } else {
                return false
            }
        }
        return true;
    }
}
