/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let pointer = 0
    let result = ''
    while (pointer < word1.length && pointer < word2.length) {
        let temp1 = word1[pointer]
        let temp2 = word2[pointer]
        pointer += 1
        result = result + temp1 + temp2
    }
    let remain = word1.slice(pointer, word1.length) + word2.slice(pointer, word2.length)
    return result + remain
}