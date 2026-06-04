/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxV = 0
    let firstW = []
    for (let i = 0; i < k; i ++) {
        let el = s[i]
        firstW.push(el)
        if (checkV(el) === true) {
            maxV += 1
        }
    }
    let leftLoop = s.length - k
    for (let i = 0; i < leftLoop; i++) {
        let removeEl = s[i]
        let addEl = s[i + k]
        firstW.splice(i, 1)
        firstW.push(addEl)
        if (checkV(removeEl) === true) {
            maxV -= 1
        }
        if (checkV(addEl) === true) {
            maxV += 1
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