const testCases = [
    {
        input: [[2, 3, 5, 1, 3], 3],
        expected: [true, true, true, false, true]
    },
    {
        input: [[4, 2, 1, 1, 2], 1],
        expected: [true, false, false, false, false]
    },
    {
        input: [[12, 1, 12], 10],
        expected: [true, false, true]
    },
    {
        input: [[1], 0],
        expected: [true]
    },
    {
        input: [[1, 1, 1], 0],
        expected: [true, true, true]
    },
    {
        input: [[5, 5, 5], 1],
        expected: [true, true, true]
    },
    {
        input: [[1, 2, 3, 4, 5], 0],
        expected: [false, false, false, false, true]
    },
    {
        input: [[10, 4, 8, 7, 3], 3],
        expected: [true, false, true, true, false]
    }
]

module.exports = testCases
