/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let short = ""
    let longer = ""
    let abstract = str1.length - str2.length
    if(abstract > 0) {
        short = str2
        longer = str1
    }
    if(abstract < 0) {
        short = str1
        longer = str2
    }
    if(abstract === 0 && str1 !== str2) {
        return ""
    }
    if(abstract === 0 && str1 === str2) {
        return str1
    }

    let greatest = gcd(short.length, longer.length)
    console.log(greatest)
    let pattern = short.slice(0, greatest)
    console.log(pattern)
    let jointedStr_longer = pattern.repeat(longer.length / pattern.length)
    let jointedStr_short = pattern.repeat(short.length / pattern.length)
    console.log(jointedStr_longer)
    console.log(jointedStr_short)
    if (jointedStr_longer === longer && jointedStr_short === short) {
        return pattern
    } else {
        return ""
    }
};

const gcd = function (numberSmall, numberBig) {
    let remain = numberBig % numberSmall
    let common = 0
    let lastDivide = numberSmall
    while(remain > 0) {
        let tempRemain = lastDivide % remain;
        if(tempRemain === 0) {
            return common = remain;
        }
        lastDivide = remain
        remain = tempRemain
    }

}
