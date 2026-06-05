/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    let theMax = 0;
    let numOfZero = 0;

    while (right < nums.length) {
        let el = nums[right];
        if (el === 0) {
            numOfZero++;
        }
        while (numOfZero > k) {
            let leftEl = nums[left];
            if (leftEl === 0) {
                numOfZero--;
            }
            left++;
        }
        let tempL = right - left + 1;
        if (tempL > theMax) {
            theMax = tempL;
        }
        right++;
    }
    return theMax;
};