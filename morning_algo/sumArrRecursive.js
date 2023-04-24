/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */

function sumArr(nums) {
  if (nums.length <= 0) {
    return 0;
  }
  sum = nums[0];
  nums.splice(0, 1);
  sum += sumArr(nums);
  return sum;
}

// Vincent solution
function sumArr(nums = [], i = 0) {
  if (i === nums.length) {
    return 0;
  }
  return nums[i] + sumArr(nums, i + 1);
}