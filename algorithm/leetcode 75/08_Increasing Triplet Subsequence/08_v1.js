/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstSmall = nums[0]
    let secondSmall = 0
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        if (firstSmall > el) {
            firstSmall = el
            continue
        }
        if (firstSmall < el) {
            secondSmall = el
            continue
        }
        if (secondSmall < el) {
            return true
        }
    }
};