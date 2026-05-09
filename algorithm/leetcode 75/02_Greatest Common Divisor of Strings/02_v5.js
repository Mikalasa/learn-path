/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let greatest = gcd(str1.length, str2.length)
    let pattern = str1.slice(0, greatest)
    let jointedStr1 = pattern.repeat(str1.length / pattern.length)
    let jointedStr2 = pattern.repeat(str2.length / pattern.length)
    if (jointedStr1 === str1 && jointedStr2 === str2) {
        return pattern
    }
    return ""
};

const gcd = function (s1, s2) {
    let divide = s1
    let dividend = s2
    if (s2 / s1 < 1) {
        divide = s2
        dividend = s1
    }
    while(true) {
        [dividend, divide] = [divide, dividend % divide]
        if(divide === 0) {
            return dividend;
        }
    }
}