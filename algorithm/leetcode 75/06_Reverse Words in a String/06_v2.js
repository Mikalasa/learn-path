/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ''
    let startIndex = null
    let endIndex = null
    for (let i = s.length - 1; i >= 0; i--) {
        let el = s[i]
        let rel = s[i + 1]
        let lel = s[i - 1]
        if ((rel === " " || rel === undefined) && el !== " ") {
            endIndex = i
        }
        if ((lel === " " || lel === undefined) && el !== " ") {
            startIndex = i
        }
        if (startIndex !== null && endIndex !== null) {
            if (result.length > 0) {
                result += " "
            }
            result += s.slice(startIndex, endIndex + 1)
            startIndex = null
            endIndex = null
        }
    }
    return result
};
