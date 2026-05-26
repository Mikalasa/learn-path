/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointer = 0
    let ls = s.length
    if (s === "") {
        return true
    }
    for (let i = 0; i < t.length; i++) {
        let el = t[i]
        let sel = s[pointer]
        if (el === sel) {
            pointer ++
        }
        if (ls === pointer) {
            return true
        }
    }
    console.log(pointer)
    return false
};