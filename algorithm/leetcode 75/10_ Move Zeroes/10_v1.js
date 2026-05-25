/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonP = 0
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        if (el !== 0) {
            let temp = nums[nonP]
            nums[nonP] = el
            nums[i] = temp
            nonP++
        }
    }
    return nums
};