var canPlaceFlowers = function(flowerbed, n) {
    let placeable = 0
    for (let i = 0; i < flowerbed.length; i++) {
        let eachEl = flowerbed[i]
        if (eachEl === 0) {
            let preP = flowerbed[i - 1]
            let nextP = flowerbed[i + 1]
            if (preP !== 1 && nextP !== 1) {
                placeable += 1
                flowerbed[i] = 1
            }
        }
    }
    if (placeable >= n) {
        return true
    }
    return false
};