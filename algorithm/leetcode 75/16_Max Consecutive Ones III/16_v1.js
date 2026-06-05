/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0
    let right = 0
    let theMax = 0
    let numOfZero = 0
    while (right <= nums.length) {
        if (numOfZero <= k) {
            let el = nums[right]
            if (el === 0) {
                numOfZero ++
            }
            let tempL = right - left
            if (tempL >= theMax) {
                theMax = tempL
            }
            right ++
        } else {
            let el = nums[left]
            if (el === 0) {
                numOfZero --
            }
            left ++
        }
    }
    return theMax
};