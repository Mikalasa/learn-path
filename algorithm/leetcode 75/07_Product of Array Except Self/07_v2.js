/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    let allM = 1
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        allM *= el
    }
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        let each = allM / el
        result.push(each)
    }
    return result
};

//division is not allowed on this question