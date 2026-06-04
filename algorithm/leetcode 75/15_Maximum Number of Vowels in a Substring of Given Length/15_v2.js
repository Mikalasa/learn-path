/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxV = 0
    let theTempV = 0
    for (let i = 0; i < k; i ++) {
        let el = s[i]
        if (checkV(el) === true) {
            maxV += 1
        }
    }
    theTempV = maxV
    let leftLoop = s.length - k
    for (let i = 0; i < leftLoop; i++) {
        let removeEl = s[i]
        let addEl = s[i + k]
        if (checkV(removeEl) === true) {
            theTempV -= 1
        }
        if (checkV(addEl) === true) {
            theTempV += 1
        }
        if (theTempV > maxV) {
            maxV = theTempV
        }
    }
    return maxV
};

var checkV = function(e) {
    if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
        return true
    }
    return false
}