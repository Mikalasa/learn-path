/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = []
    let charsCount = 0
    for (let i = s.length - 1; i >= 0; i--) {
        let el = s[i]
        if (el !== " ") {
            charsCount ++
        } else {
            let temp = s.slice(i + 1, i + charsCount + 1)
            if (temp !== '') {
                result.push(temp)
            }
            charsCount = 0
        }
        if (i === 0 && charsCount !== 0) {
            result.push(s.slice(i, i + charsCount))
        }
    }
    return result.join(" ")
};
