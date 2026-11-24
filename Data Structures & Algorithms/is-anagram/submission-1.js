class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let freqS = {};
        for (let i = 0; i < s.length; i++) {
            if (freqS[s[i]]) {
                freqS[s[i]] = freqS[s[i]] + 1;
            } else {
                freqS[s[i]] = 1;
            }
        }

        // let freqT = {};
        // for (let i = 0; i < s.length; i++) {
        //     if (freqT[t[i]]) {
        //         freqT = freqT + 1;
        //     } else {
        //         freqT = 1;
        //     }
        // }

        console.log(freqS)
        for (let i = 0; i < t.length; i++) {
            if (!freqS[t[i]]) return false;
            if (freqS[t[i]] < 1) {
                return false
            } else {
                freqS[t[i]] = freqS[t[i]] - 1;
            };
        }

        return true;
    }
}
