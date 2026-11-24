class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sanitizedString = s.toLowerCase().replace(/[^A-Z0-9]/ig, "");
        let start = 0, end = sanitizedString.length - 1
        while (start < end) {
            console.log
            if (sanitizedString[start] !== sanitizedString[end]) return false;

            start++
            end--
        }

        return true;
    }
}
