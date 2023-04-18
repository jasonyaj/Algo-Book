/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {}

// Our team answer
function trim(str) {
  for(var i=0; i<str.length; i++){
      if(str[i]==" "){
          continue
      }else{
          var index = i;
          break;
      }
  }
  for(var j=str.length-1; j>0; j--){
      if(str[j]==" "){
          continue
      }else{
          var index2 = j;
          break;
      }
  }
  //Slice out the word without leading and trailing spaces and return
  return str.slice(index,index2+1);
}

console.log(trim(str1));