/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {}

// Devin team solution
function otherOtherBracesValid(string) {
  par = [];
  for (i in string) {
    if (string[i] == '(' || string[i] == '[' || string[i] == '{') {
      par.push(string[i]);
    } else if (string[i] == ')') {
      if (par[par.length - 1] == '(') {
        par.pop();
      } else {
        return false;
      }
    } else if (string[i] == ']') {
      if (par[par.length - 1] == '[') {
        par.pop();
      } else {
        return false;
      }
    } else if (string[i] == '}') {
      if (par[par.length - 1] == '{') {
        par.pop();
      } else {
        return false;
      }
    }
  }
  if (par.length == 0) {
    return true;
  } else {
    return false;
  }
}