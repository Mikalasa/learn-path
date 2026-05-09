/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/*
* not pass
* */
var gcdOfStrings_v1 = function(str1, str2) {
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
    for(let i = 0; i < short.length; i++) {
        let newShort = short.slice(0, short.length - i)
        if (newShort.length === 1) {
            return ""
        }

        if(longer.length % newShort.length !== 0) {
            continue
        }
        let times = longer.length / newShort.length
        let tempString = ''
        for(let j = times; j > 0; j--) {
            tempString += newShort
        }
        if(tempString === longer) {
            return newShort
        }
    }
};

module.exports = gcdOfStrings_v1