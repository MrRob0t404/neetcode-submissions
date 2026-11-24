class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagrams = {};
        let results = [];

        for (let i = 0; i < strs.length; i++) {
            let key = strs[i].split("").sort().join('');
            if (anagrams[key]) {
                anagrams[key].push(strs[i])
            } else {
                anagrams[key] = [strs[i]];
            }
        }

        for (let arr in anagrams) {
            results.push(anagrams[arr]);
        }

        return results;
    }
}
