console.log(typeof(null))
console.log(typeof(undefined))

let a
console.log(a)


const xx = 10
// xx = 8 can not be changed
console.log(xx)


let aa
//console.log(aa[0])  TypeError: Cannot read properties of undefined (reading '0')


function xxx () {
    console.log(xx)
}

let pp = xxx()

console.log(pp)