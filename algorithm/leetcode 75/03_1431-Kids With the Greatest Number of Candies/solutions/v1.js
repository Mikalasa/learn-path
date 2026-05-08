/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies_v1 = function(candies, extraCandies) {
    let result = []
    let hasBigger = false
    for (let i = 0; i < candies.length; i++) {
        let eachElement = candies[i]
        let addExtra = eachElement + extraCandies
        for (let j = 0; j < candies.length; j++) {
            let eachElementJ = candies[j]
            if (addExtra < eachElementJ) {
                hasBigger = true
            }
            if (addExtra === eachElementJ) {
                continue
            }
            if (addExtra > eachElementJ) {
                continue
            }
        }
        if (hasBigger == false) {
            result.push(true)
        }

        if (hasBigger == true) {
            result.push(false)
            hasBigger = false
        }
    }
    return result

};

module.exports = kidsWithCandies_v1;