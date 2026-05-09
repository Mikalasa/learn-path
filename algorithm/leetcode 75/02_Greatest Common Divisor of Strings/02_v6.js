/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ""
    }
    let greatest = gcd(str1.length, str2.length)
    return str1.slice(0, greatest)
};

const gcd = function (s1, s2) {
    while(s2 !== 0) {
        [s1, s2] = [s2, s1 % s2]
    }
    return s1
}