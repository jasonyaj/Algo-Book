/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */

// Devin's team solution
function reverseStr(str) {
  if (str === '') {
    return '';
  }
  let strArr = str.slice(1);
  let str0 = str[0];
  return reverseStr(strArr) + str0;
}