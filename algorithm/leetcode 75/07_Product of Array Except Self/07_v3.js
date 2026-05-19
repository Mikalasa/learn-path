/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftM = []
    let rightM = []
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        if (i === 0) {
            leftM.push(1)
        } else {
            leftM.push(nums[i - 1] * leftM[i - 1])
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        let el = nums[i]
        if (i === nums.length - 1) {
            rightM.push(1)
        } else {
            rightM.push(nums[i + 1] * rightM[nums.length - 2 - i])
        }
    }
    console.log(leftM)
    console.log(rightM)
    for (let i = 0; i < nums.length; i++) {
        let elL = leftM[i]
        let elR = rightM[nums.length - i -1]
        result.push(elL * elR)
    }
    return result
};