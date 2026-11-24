class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length < 2) return true;
        let sanitizedInput = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        let l = 0, r = sanitizedInput.length - 1;
        while (l < r) {
            console.log(sanitizedInput[l] , sanitizedInput[r])
            if (sanitizedInput[l] !== sanitizedInput[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
