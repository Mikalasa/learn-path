let af = function() {}  // express
console.log(af.length);
function bf() {} // declare


let one = function() {
    two()
}
//one()  // Uncaught ReferenceError: two is not defined
let two = function() {console.log("I am two")}


function newOne() {
    newTwo()
}
newOne()    // 因为declare的函数会被提升到包含脚本，函数，或代码块的顶部
function newTwo() {
    console.log("I am newTwo")
}


const zz = () => console.log("I am arrow")
zz()
let pp = zz
pp()
pp = function () {
    console.log("pp: i am not zz anymore")
}
zz()
pp()

// 剪头函数返回对象字面量，必须使用{}包裹,没有return，必须再放到一个圆括号里，以防止解释器分不清{}属于字面量还是函数的
const ff = x => {return {"xx": "1"}}
// const ff = x => {{"xx": "1"}} // wrong
const gg = x => ({"xx": "1"})