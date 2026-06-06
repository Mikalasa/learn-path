let x = [1, 2, 3]
x.length = 0
console.log(x) // []

let y = [, , 3] //稀疏数组
console.log(y)
console.log(y.length)
console.log(y[0]) // undefined as it is empty elements

let z = new Array(5)
console.log(z)
console.log(z.length)
z[10] = 2 // 11th element = 2, so, just created 5 more empty elements
console.log(z)
console.log(z.length)

let similar = {"0": "a", "1": "b", length: 2}
console.log(similar)
console.log(similar.length)
console.log(similar[1])