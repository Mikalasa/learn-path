const testCases = require('./01_1768-Merge Strings Alternately/test/mergeAlternately.test')


const solutions = {
    v1: require('./01_1768-Merge Strings Alternately/solutions/solution_v1'),
}

function runTests() {
    for (const [name, fn] of Object.entries(solutions)) {
        console.log(`\n🚀 Running solution: ${name}`)
        console.log('----------------------------')

        testCases.forEach(({ input, expected }, index) => {
            const result = fn(...input)
            const pass = result === expected

            console.log(`Test ${index + 1}:`)
            console.log(`Input: ${JSON.stringify(input)}`)
            console.log(`Expected: ${expected}`)
            console.log(`Output:   ${result}`)
            console.log(pass ? '✅ PASS\n' : '❌ FAIL\n')
        })
    }
}

runTests()