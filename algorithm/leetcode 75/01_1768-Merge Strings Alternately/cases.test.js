const testCases = [
    {
        input: ["abc", "pqr"],
        expected: "apbqcr"
    },
    {
        input: ["abcd", "pq"],
        expected: "apbqcd"
    },
    {
        input: ["ab", "pqrs"],
        expected: "apbqrs"
    },
    {
        input: ["a", "z"],
        expected: "az"
    },
    {
        input: ["a", "bcdef"],
        expected: "abcdef"
    }
]

module.exports = testCases