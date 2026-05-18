/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let mut = 1
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue
            } else {
                mut *= nums[j]
            }
        }
        result.push(mut)
    }
    return result
};