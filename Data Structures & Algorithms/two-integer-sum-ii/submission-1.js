class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0, end = numbers.length - 1;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[start] + numbers[end] === target) {
                return [start + 1, end + 1]
            }

            if (numbers[start] + numbers[end] > target) {
                end--
            } else {
                start++
            }
        }
    }

}
