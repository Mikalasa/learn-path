/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let numberOfOne = 0
    let placeable = 2 * n
    for (let i = 0; i < flowerbed.length; i++) {
        let eachEl = flowerbed[i]
        if (eachEl === 1) {
            numberOfOne += 1
        }
    }
    let numberOfZero = flowerbed.length - numberOfOne
    let startWithOne = 0
    if (flowerbed[0] === 1) {
        startWithOne = 1
    }
    if (flowerbed.length < 3) {
        return false
    }
    if (n === 0) {
        return true
    }
    if (numberOfZero === numberOfOne) {
        return false
    }
    if (numberOfZero < numberOfOne) {
        return false
    }
    if (startWithOne === 0) {
        if (placeable <= numberOfZero) {
            return true
        } else {
            return false
        }
    }
    if (startWithOne === 1) {
        if (placeable < numberOfZero) {
            return true
        } else {
            return false
        }
    }
};