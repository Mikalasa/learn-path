/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0
    let right = s.length - 1
    let arrayS = Array.from(s)
    let findL = false
    let findR = false
    while (left < right) {
        let elL = arrayS[left].toLowerCase()
        let elR = arrayS[right].toLowerCase()
        if (elL === 'a' || elL === 'e' || elL === 'i' || elL === 'o' || elL === 'u') {
            findL = true
        } else if (findL === false) {
            left ++
        }
        if (elR === 'a' || elR === 'e' || elR === 'i' || elR === 'o' || elR === 'u') {
            findR = true
        } else if (findR === false) {
            right --
        }
        if (findL === true && findR === true) {
            let orl = arrayS[left]
            let orr = arrayS[right]
            arrayS[left] = orr
            arrayS[right] = orl
            findL = false
            findR = false
            left ++
            right --
        }
    }
    return arrayS.join('')
};