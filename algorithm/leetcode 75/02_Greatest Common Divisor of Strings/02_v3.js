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
    } else {
        return ""
    }
};

const gcd = function (s1, s2) {
    let numberSmall = s1
    let numberBig = s2
    if (s2 / s1 < 1) {
        numberSmall = s2
        numberBig = s1
    }
    let remain = numberBig % numberSmall
    let common = 0
    let lastDivide = numberSmall
    if (remain === 0) {
        return numberSmall
    }
    while(remain > 0) {
        let tempRemain = lastDivide % remain;
        if(tempRemain === 0) {
            return common = remain;
        }
        lastDivide = remain
        remain = tempRemain
    }
}
