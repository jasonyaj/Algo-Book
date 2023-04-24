/* 
    Balance Index
    Here, a balance point is ON an index, not between indices.
    Return the balance index where sums are equal on either side
    (exclude its own value).
    
    Return -1 if none exist.
    
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1,2,3,0,0,6]

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  if (nums.length % 2 == 0){
    return -1
  }
  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  var leftSum = 0
  for (var i = 0; i < nums.length; i++) {
    var rightSum = totalSum - leftSum - nums[i];
    if (leftSum == rightSum){
      return i;
    }
    leftSum += nums[i];
  }
}

console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));
