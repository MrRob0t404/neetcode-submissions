class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const freqSCount = this.countFreq(s);

        for (let i = 0; i < t.length; i++) {
            if (freqSCount[t[i]] < 1 || !freqSCount[t[i]]) {
                return false;
            } else {
                freqSCount[t[i]] = freqSCount[t[i]] - 1;
            }
        }

        return true;
    }

    countFreq(s) {
        let freqTrack = {};
        for (let i = 0; i < s.length; i++) {
            if (freqTrack[s[i]]) {
                freqTrack[s[i]] = freqTrack[s[i]] + 1;
            } else {
                freqTrack[s[i]] = 1;
            }
        }
        return freqTrack;
    }
}
