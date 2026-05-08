const testCases = [
    {
        input: ["ABCABC", "ABC"],
        expected: "ABC"
    },
    {
        input: ["ABABAB", "ABAB"],
        expected: "AB"
    },
    {
        input: ["LEET", "CODE"],
        expected: ""
    },
    {
        input: ["ABCDEF", "ABC"],
        expected: ""
    },
    {
        input: ["AAAAAA", "AAA"],
        expected: "AAA"
    },
    {
        input: ["ABABABAB", "ABAB"],
        expected: "ABAB"
    },
    {
        input: ["A", "A"],
        expected: "A"
    },
    {
        input: ["AB", "AB"],
        expected: "AB"
    },
    {
        input: ["TAUXXTAUXXTAUXX", "TAUXXTAUXX"],
        expected: "TAUXX"
    },
    {
        input: ["ababab", "abab"],
        expected: "ab"
    }
]

module.exports = testCases
