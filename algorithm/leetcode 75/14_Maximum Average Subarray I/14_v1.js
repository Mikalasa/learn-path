/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let looping = nums.length - k
    let sum = 0
    let maxA = null
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    maxA = sum / k
    let index = 0
    while (looping > 0) {
        let tempSum = sum - nums[index] + nums[index + k]
        sum = tempSum
        looping--
        index++
        if ((tempSum / k) > maxA) {
            maxA = tempSum / k
        }
    }
    return maxA
};