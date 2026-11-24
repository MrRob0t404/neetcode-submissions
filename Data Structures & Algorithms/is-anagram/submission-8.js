class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let freqS = this.countFreq({}, s);
        let freqT = this.countFreq({}, t);

        for (let char in freqS) {
            if (freqS[char] !== freqT[char]) return false;
        }

        return true; 

    }

    countFreq(ledger, iterator) {
        for (let i = 0; i < iterator.length; i++) {
            if (ledger[iterator[i]]) {
                ledger[iterator[i]] = ledger[iterator[i]] + 1;
            } else {
                ledger[iterator[i]] = 1;
            }
        }

        return ledger;
    }
}
