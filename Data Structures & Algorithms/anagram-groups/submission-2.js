class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) {
            console.log(true)
            return [strs];
        };

        let resp = [];
        let freq = this.sortStrings(strs);

        for (let word in freq) {
            resp.push(freq[word]);
        }

        return resp;
    }

    sortStrings(strs) {
        let freq = {};
        for (let i = 0; i < strs.length; i++) {
            let sortedString = strs[i].split('').sort().join('');
            if (freq[sortedString]) {
                freq[sortedString] = [...freq[sortedString], strs[i]];
            } else {
                freq[sortedString] = [strs[i]];
            }
        }
        return freq
    }
}
