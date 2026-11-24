class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let mapping = {}

        for(let i = 0; i < strs.length; i++){ 
            if(!mapping[strs[i].split("").sort().join("")]){ 
                mapping[strs[i].split("").sort().join("")] = []
            }
            mapping[strs[i].split("").sort().join("")] = [...mapping[strs[i].split("").sort().join("")], strs[i]]
        }

        let resp = []; 
        for(let key in mapping){ 
            resp.push(mapping[key]);
        }
        return resp
    }

}
