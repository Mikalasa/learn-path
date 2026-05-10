console.log('\u{1F600}') //Unicode emoji
console.log("caf\u00e9") // café: Unicode
console.log("caf\u{e9}") // café: Unicode {} -> new syntax from ES6
console.log("cafe\u{301}") // ASCII

function test_without_Semicolon() {
    function f(n) {
        return n + 1
    }
    let a = 1
    let b = 2
    let x = 0
    let y = x + f
    (a + b).toString()
    console.log(y, "without Semicolon")
}

function test_with_Semicolon() {
    function f(n) {
        return n + 1
    }
    let a = 1
    let b = 2
    let x = 0
    let y = x + f;
    (a + b).toString()
    console.log(y, " with Semicolon")
}

test_without_Semicolon()
test_with_Semicolon()