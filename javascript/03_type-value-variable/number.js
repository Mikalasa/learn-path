let x = 0b10101 // 0b 二进制开头
let y = 0o377 // 0o 八进制开头
let z = 0xff

console.log(x, y, z)

let xx = .3 - .2
let yy = .2 - .1
console.log(xx === yy, xx === .1, yy === .1)

let a = 1
let b = a
a = 2
//point to different memory address, not change value in same address of 1
console.log(a)
console.log(b)

let aa = 0.3 - 0.2
let bb = 0.2 - 0.1

let cc = aa.toFixed(10)
let cd = bb.toFixed(10)
console.log(cc === cd, aa === bb)

let xx = (0.4 - 0.3).toFixed(100)