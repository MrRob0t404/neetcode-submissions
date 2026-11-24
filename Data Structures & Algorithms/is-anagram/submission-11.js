class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false; 

            let freqS, freqT;

        freqS = this.countFreq(s);
        freqT = this.countFreq(t);

        for (let char in freqS) {
            if (freqS[char] !== freqT[char]) return false;
        }

        return true;
    }

    countFreq(str) {
        let freq = {};

        for (let i = 0; i < str.length; i++) {
            if (freq[str[i]] !== undefined) {
                freq[str[i]] = freq[str[i]] + 1;
            } else {
                freq[str[i]] = 1;
            }
        }

        return freq;
    }
}
