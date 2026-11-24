class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sFreq = this.countFreq(s);

        for (let i = 0; i < t.length; i++) {
            if (sFreq[t[i]] && sFreq[t[i]] >= 1) {
                sFreq[t[i]] = sFreq[t[i]] - 1;
            } else {
                return false;
            }
        }

        return true;
    }

    countFreq(string) {
        let obj = {};

        for (let i = 0; i < string.length; i++) {
            if (obj[string[i]] === undefined) {
                obj[string[i]] = 1
            } else { obj[string[i]] = obj[string[i]] + 1 }
        }

        return obj;
    }
}
