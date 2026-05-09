/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let pointer = 0
    let result = ''
    let longer = ''
    while (true) {
        let temp1 = word1[pointer]
        let temp2 = word2[pointer]
        if (temp1 === undefined) {
            longer = word2
            break
        }
        if (temp2 === undefined) {
            longer = word1
            break
        }
        pointer += 1
        result = result + temp1 + temp2
    }
    let remain = longer.slice(pointer, longer.length)
    return result + remain
}
