/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
// Ben Team Solution
function generateAnagrams(str) {
  if (str.length == 1) {
    return [str]
  }
  var anagrams = []
  for(var i = 0; i < str.length; i++){
    var letter = str[i]
    var remaining = str.slice(0, i) + str.slice(i + 1)
    var one_ana = generateAnagrams(remaining)
    for(var j = 0; j < one_ana.length; j++){
      anagrams.push(letter + one_ana[j])
    }
  }
  return anagrams
}

console.log(generateAnagrams('lime'));

// Devin Team Solution
function generateAnagrams(str, arr = [], part = '') {
  if (!str) {
    arr.push(part);
  }
  for (let i = 0; i < str.length; i++) {
    let left = str.slice(0, i);
    let right = str.slice(i + 1);
    generateAnagrams(left + right, arr, part + str[i]);
  }
  return arr;
}
