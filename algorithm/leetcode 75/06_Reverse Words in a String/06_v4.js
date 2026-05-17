/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ""
    let prevState = null
    let currentState = null
    let end = null
    let start = null
    let newS = " " + s
    for (let i = newS.length - 1; i >= 0; i--) {
        prevState = currentState
        let el = newS[i]
        if (el !== " ") {
            currentState = "word"
        } else {
            currentState = "space"
        }
        if (currentState !== prevState) {
            if (currentState === "word") {
                end = i
            }
            if (currentState === "space") {
                start = i
                if (result.length > 0) {
                    result += " "
                }
                result += newS.slice(start + 1, end + 1)
            }
        }
    }
    return result
};
