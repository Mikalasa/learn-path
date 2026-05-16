/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let pointerF = 0
    let pointerB = 0
    let findF = false
    let findB = false
    let arrayS = Array.from(s)
    for (let i = 0; i < arrayS.length / 2; i++) {
        let fel = s[i];
        let bel = s[arrayS.length - 1 - i]
        let elf = fel.toLowerCase()
        let elb = bel.toLowerCase()
        if (elf === 'a' || elf === 'e' || elf === 'i' || elf === 'o' || elf === 'u') {
            pointerF = i
            findF = true
        }
        if (elb === 'a' || elb === 'e' || elb === 'i' || elb === 'o' || elb === 'u') {
            pointerB = arrayS.length - 1 - i
            findB = true
        }
        if (findF && findB === true) {
            let orf = arrayS[pointerF]
            let orb = arrayS[pointerB]
            arrayS[pointerF] = orb
            arrayS[pointerB] = orf
            findF = false
            findB = false
        }
    }
    return arrayS.join('')
};