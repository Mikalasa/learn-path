let o = {
    xx: 1,
    yy: "hello"
}

Object.defineProperty(o, 'xx', {
    value: 88,
    writable: false
})

console.log(o)
o["xx"] = "ni hao"
console.log(o)  //not changeable
