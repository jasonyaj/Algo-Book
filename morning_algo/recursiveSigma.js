/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
  if (num < 0) {
    return 0
  }
  let sum = Math.floor(num) + recursiveSigma(num-1)
  return sum
}

console.log(recursiveSigma(5));

// Ben's team
var sum = 0
function sumArr(nums) {
  if (nums.length === 0) {
    return sum
  }
  sum += nums[nums.length - 1]
  nums.pop()
  return sumArr(nums)
}