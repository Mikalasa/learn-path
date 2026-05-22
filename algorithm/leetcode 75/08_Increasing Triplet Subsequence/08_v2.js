/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstSmall = nums[0]
    let secondSmall = Infinity
    let findThird = false
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        if (firstSmall >= el) {
            firstSmall = el
        } else if (firstSmall < el && el <= secondSmall) {
            secondSmall = el
        } else if (secondSmall < el) {
            findThird = true
        }
        console.log("f: ", firstSmall, " s: ", secondSmall)
    }
    return findThird
};