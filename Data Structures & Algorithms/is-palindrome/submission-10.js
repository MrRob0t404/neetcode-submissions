class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // sanitize input
        let sanitizedString = s.replace(/[^A-Z0-9]/ig, "").toLowerCase();
        console.log(sanitizedString);
        let start = 0, end = sanitizedString.length - 1;

        while (start < end) {
            if (sanitizedString[start] !== sanitizedString[end]) {
                return false;
            } else {
                start++;
                end--
            }
        }
        return true;
    }
}
