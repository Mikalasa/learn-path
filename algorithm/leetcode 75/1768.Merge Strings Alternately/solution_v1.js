/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var solution_v1 = function (word1, word2) {
    if (word1.length > word2.length) {
        let remain = word1.slice(word2.length, word1.length + 1)
        let cutWord1 = word1.slice(0, word2.length)
        let result = jointString(cutWord1, word2, remain)
        return result
    }

    if (word1.length == word2.length) {
        let remain = ''
        let cutWord1 = word1
        let result = jointString(cutWord1, word2, remain)
        return result
    }

    if (word1.length < word2.length) {
        let remain = word2.slice(word1.length, word2.length + 1)
        let cutWord2 = word2.slice(0, word1.length)
        let result = jointString(word1, cutWord2, remain)
        return result
    }

};

const jointString = function (word1, word2, remain) {
    let mergeString = ''
    for (let i = 0; i < word1.length; i++) {
        let temp = word1[i] + word2[i]
        mergeString += temp
    }
    return mergeString = mergeString + remain
}

module.exports = solution_v1