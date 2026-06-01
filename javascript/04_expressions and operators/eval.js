//eval() 返回最后一个表达式的值。
function theF() {
    return 10
}
let strTheF = theF.toString()
console.log(strTheF)
console.log(eval(strTheF))


console.log('\n ====== \n')


let str1 = `
(function theF() {
    return 66
})
`
// use () cover function to change it to a expression
console.log(eval(str1))
console.log(eval(str1)())


console.log('\n ====== \n')


let str2 = `function theF2() {
    const x = 88
    console.log(x)
} theF2()`
eval(str2)
theF2()  //theF2 already created by eval
