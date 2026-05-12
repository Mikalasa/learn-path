/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let pickString = ''
    let box = []
    let newBox = []
    let result = ''
    for (let i = 0; i < s.length + 1; i++) {
        let el = s[i]
        if (el === " " || el === undefined) {
            box.push(pickString)
            pickString = ''
        } else {
            pickString += s[i]
        }
    }
    for (let i = 0; i < box.length; i++) {
        if (box[i] !== "") {
            newBox.push(box[i])
        }
    }
    let rBox = newBox.reverse()
    let numberSpaces = rBox.length - 1
    for (let i = 0; i < rBox.length; i++) {
        let el = rBox[i]
        if (numberSpaces > 0) {
            result += el + " "
            numberSpaces -= 1
        } else {
            result += el
        }

    }
    return result
};