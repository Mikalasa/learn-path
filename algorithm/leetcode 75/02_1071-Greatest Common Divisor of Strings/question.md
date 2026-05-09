# 1071. Greatest Common Divisor of Strings

Official: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

Difficulty: Easy

## Problem

For two strings `str1` and `str2`, find the largest string `x` such that both `str1` and `str2` can be formed by repeating `x` one or more times.

If no such string exists, return an empty string.

## Function

```js
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
```

## Examples

```txt
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
```

```txt
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
```

```txt
Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

## Constraints

- `1 <= str1.length, str2.length <= 1000`
- `str1` and `str2` contain uppercase English letters.

## Notes

- If two strings share a repeating base pattern, `str1 + str2` should equal `str2 + str1`.
- The answer length is related to the greatest common divisor of the two string lengths.
