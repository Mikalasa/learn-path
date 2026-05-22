/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let fp = chars[0]
    let count = 0
    let write = 0
    for (let i = 0; i < chars.length; i++) {
        let el = chars[i]
        if (fp === el) {
            count += 1
        }
        if (fp !== el) {
            chars[write] = fp
            write ++
            fp = el
            if (count > 1) {
                let str = count.toString()
                for (let j = 0; j < str.length; j++) {
                    chars[write] = str[j]
                    write++
                }
            }
            count = 1
        }
    }
    chars[write] = fp
    write ++
    if (count > 1) {
        let str = count.toString()
        for (let j = 0; j < str.length; j++) {
            chars[write] = str[j]
            write++
        }
    }
    console.log(chars)
    console.log(write)
    return write
};