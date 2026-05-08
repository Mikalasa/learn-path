const problems = [
    {
        name: '1768 Merge Strings Alternately',
        testCases: require('./01_1768-Merge Strings Alternately/cases.test'),
        solutions: {
            v_01: require('./01_1768-Merge Strings Alternately/solutions/v1'),
        }
    },
    {
        name: '1071 Greatest Common Divisor of Strings',
        testCases: require('./02_1071-Greatest Common Divisor of Strings/cases.test'),
        solutions: {
            v_01: require('./02_1071-Greatest Common Divisor of Strings/solutions/v1'),
            v_02: require('./02_1071-Greatest Common Divisor of Strings/solutions/v2'),
        }
    },
    {
        name: '1431-Kids With the Greatest Number of Candies ',
        testCases: require('./03_1431-Kids With the Greatest Number of Candies/cases.test'),
        solutions: {
            v_01: require('./03_1431-Kids With the Greatest Number of Candies/solutions/v1'),
        }
    }
]


function runTests(problems) {
    problems.forEach((problem) => {
        console.log(`\n📘 Problem: ${problem.name}`)
        console.log('====================================')

        for (const [version, fn] of Object.entries(problem.solutions)) {
            console.log(`\n🚀 Running solution: ${version}`)
            console.log('----------------------------')

            problem.testCases.forEach(({ input, expected }, index) => {
                const result = fn(...input)
                const pass = result === expected

                console.log(`Test ${index + 1}:`)
                console.log(`Input: ${JSON.stringify(input)}`)
                console.log(`Expected: ${expected}`)
                console.log(`Output:   ${result}`)
                console.log(pass ? '✅ PASS\n' : '❌ FAIL\n')
            })
        }
    })
}

runTests(problems)