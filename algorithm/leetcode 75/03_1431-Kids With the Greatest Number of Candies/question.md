# 1431. Kids With the Greatest Number of Candies

Official: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

Difficulty: Easy

## Problem

You are given an array `candies`, where `candies[i]` is the number of candies the `i`th kid has, and an integer `extraCandies`.

For each kid, determine whether giving all `extraCandies` to that kid would make their candy count greater than or equal to the greatest candy count among all kids.

Return a boolean array where each position answers that question for the corresponding kid.

## Function

```js
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
```

## Examples

```txt
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
```

```txt
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false]
```

```txt
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

## Constraints

- `2 <= candies.length <= 100`
- `1 <= candies[i] <= 100`
- `1 <= extraCandies <= 50`

## Notes

- First find the maximum value in `candies`.
- Then check each kid with `candies[i] + extraCandies >= maxCandies`.
