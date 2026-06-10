function findMax(...rest) {
    let max = -Infinity
    for (let n of rest ) {
        if (n >= max) {
            max = n
        }
    }
    console.log(max)
}

findMax(1,2,3,4,5,6,7,8,9)

// default parameter

function aFn(number, n =[]) {
    n.push(number + number)
    n.push(number * number)
    console.log(n)
}

aFn(2) // not give second parameter, but it is fine, there is a default
aFn(3, [1])
