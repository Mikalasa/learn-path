let objone = {
    v: 123,
}

console.log(objone.v)
console.log(objone["v"])

objone["v"] = 1
//objone["v"] error
console.log(objone["v"])


let v =Symbol('v')
let obj2 = {
    [v]: 888,
}

console.log(obj2.v)
console.log(obj2["v"])
console.log(obj2[v])

obj2["v"] = 1

console.log(obj2["v"])
console.log(obj2[v])
console.log(Reflect.ownKeys(obj2))

//修改
obj2[v] = 666
console.log(obj2[v])

function test() {
    const secret = Symbol()

    return secret
}

const a = test()
const b = test()

console.log(a === b)

