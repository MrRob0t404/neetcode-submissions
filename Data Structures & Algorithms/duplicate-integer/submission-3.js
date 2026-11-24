class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = this.countFreq({}, nums);
        for (let num in freq) {
            if (freq[num] > 1) return true;
        }
        return false;
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
