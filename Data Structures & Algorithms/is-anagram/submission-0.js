class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){ 
            return false; 
        }

        let trackChars = {}; 

        for(let i = 0; i < s.length; i++){ 
            if(trackChars[s[i]]){ 
                trackChars[s[i]] = trackChars[s[i]] + 1;
            }else{ 
                trackChars[s[i]] = 1; 
            }
        }

        for(let i = 0; i < s.length; i++){ 
            if(trackChars[t[i]] < 1 || !trackChars[t[i]]){ 
               return false; 
            }else{ 
                trackChars[t[i]] = trackChars[t[i]] - 1; 
            }
        }
        return true; 
    }
}
