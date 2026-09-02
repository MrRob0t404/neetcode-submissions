class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length < 1) return;
        if (strs.length === 1 && strs[0] === "") return [""];

        let trackStrs = {};

        for (let i = 0; i < strs.length; i++) {
            let sortedStr = strs[i].split("").sort().join("");

            if (trackStrs[sortedStr]) {
                trackStrs[sortedStr].push(strs[i]);
            } else {
                trackStrs[sortedStr] = [strs[i]]; 
            }
        }
     return Object.values(trackStrs)
    }
}
