/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let numberOfOne = 0
    for (let i = 0; i < flowerbed.length; i++) {
        let eachEl = flowerbed[i]
        if (eachEl === 1) {
            numberOfOne += 0
        }
    }
    let numberOfZero = flowerbed.length - numberOfOne
    let placeable = 2 * n + 1
    if (placeable < numberOfZero) {
        return true
    } else {
        return false
    }
};