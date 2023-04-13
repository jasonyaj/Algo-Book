/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
  let newStr = '';
  let tempString = '';
  let newWord = false
  let words = str.split(' ')
  console.log(words);
  // for (var i = 0; i < str.length; i++) {
  //   if (str[i] == ' ') {
  //     newWord = false
  //     console.log('--');
  //   }else {
  //     for (var j = str.length-1; j >= 0 ; j--){
  //       newStr += str[j];
  //       console.log('+++');
  //     }
  //   }
  // }return newStr
}

// console.log(reverseWords(str1));
console.log(reverseWords(str2));
// console.log(reverseWords(str3));

// devin team solution
function reverseWords(str) {
  let newString = str.split(' ');
  let returnString = '';
  for (word in newString) {
    let tempWord = '';
    for (let i = newString[word].length - 1; i >= 0; i--) {
      tempWord += newString[word][i];
    }
    if (returnString != ''){
      returnString += ' ';
    }
    returnString += tempWord;
  }
  return returnString;
}
