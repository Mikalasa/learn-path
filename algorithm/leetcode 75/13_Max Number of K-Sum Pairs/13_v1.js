/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let room = {}
    let pairs = 0
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        let b = k - el
        if (b in room && room[b] !== 0) {
            pairs ++
            room[b] = room[b] - 1
        } else {
            if (room[el] === undefined) {
                room[el] = 0
            }
            room[el] += 1
        }
    }
    console.log(room)
    return pairs
};