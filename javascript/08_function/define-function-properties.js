function fn(n) {
    if (n > 0) {
        fn[n] = n * fn(n - 1)
    }
    return fn[n]
}
fn[0] = 1
console.log(fn(5))
console.log(fn[4])
console.log(fn)
console.log(Object.entries(fn)) // Object.entries是吧key与value转化成数组


