/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let saveIndex = []
    let vowels = []
    let newStr = []
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let oel = s[i];
        let el = oel.toLowerCase()
        if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
            vowels.push(oel)
            saveIndex.push(i)
        }
        newStr.push(oel)
    }
    let rVowels = vowels.reverse()
    for (let i = 0; i < saveIndex.length; i++) {
        let theIndex = saveIndex[i]
        newStr[theIndex] = rVowels[i]
    }
    for (let i = 0; i < newStr.length; i++) {
        result += newStr[i]
    }
    return result
};