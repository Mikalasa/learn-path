/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = null
    let left = 0
    let right = height.length - 1
    for (let i = 0; i < height.length; i++) {
        let theL = height[left]
        let theR = height[right]
        let tempArea = Math.min(theL, theR) * (right - left)
        if (theL < theR) {
            left ++
        } else {
            right --
        }
        if (tempArea >= max) {
            max = tempArea
        }
    }
    return max
};