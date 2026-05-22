/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let myMap = {}
    let result = ''
    let finalArray = []
    for (let i = 0; i < chars.length; i++) {
        let el = chars[i]
        if (el in myMap) {
            myMap[el] += 1
        } else {
            myMap[el] = 1
        }
    }
    console.log(myMap)
    Object.keys(myMap).forEach(key => {
        let theKey = key
        if (myMap[key] > 1) {
            result += key + myMap[key]
        } else {
            result += key
        }
    });
    console.log(result)
    for (let i = 0; i < result.length; i++) {
        let el = result[i]
        console.log(el)
        finalArray.push(el)
    }
    return finalArray
};