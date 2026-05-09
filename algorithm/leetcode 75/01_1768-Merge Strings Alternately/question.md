# 1768. Merge Strings Alternately

Official: https://leetcode.com/problems/merge-strings-alternately/description/

Difficulty: Easy

## Problem

Given two strings `word1` and `word2`, build a new string by taking characters alternately from `word1` and `word2`, starting with `word1`.

If one string still has remaining characters after the other string is exhausted, append the remaining part to the end.

Return the merged string.

## Function

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
```

## Examples

```txt
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
```

```txt
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
```

```txt
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
```

## Constraints

- `1 <= word1.length, word2.length <= 100`
- `word1` and `word2` contain lowercase English letters.

## Notes

- A simple loop up to the longer string length is enough.
- Be careful when one string is shorter than the other.
