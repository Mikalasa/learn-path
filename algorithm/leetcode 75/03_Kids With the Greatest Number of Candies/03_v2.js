/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = []
    let maxAmount = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        let eachEl = candies[i] + extraCandies
        if (eachEl < maxAmount) {
            result.push(false)
        } else {
            result.push(true)
        }
    }
    return result
};