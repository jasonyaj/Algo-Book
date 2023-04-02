// Create a function to produce a random array with integers between 0-100,
// given an integer for the array length.

// Print 1-255
// Print all the integers from 1 to 255.

function printNum() {
  for (var i = 1; i < 256; i++) {
    console.log(i);
  }
}
printNum();

// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

function printIntegerSum() {
  sum = 0;
  for (var i = 0; i < 256; i++) {
    sum += i;
    console.log("Integer: ", i);
    console.log("    Sum: ", sum);
  }
}

printIntegerSum();

// Find and Print Max
// Given an array, find and print its largest element.

function printMax(arr) {
  max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Max: ", max);
}

var arr = [1, 2, 20, 3, 4, 5, 6];
printMax(arr);

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
function printNegatives() {
  var arr = [];
  for (var i = 1; i < 256; i += 2) {
    arr.push(i);
  }
  return arr;
}

console.log(printNegatives());

// Solution 2
function printNegatives() {
  let arr = [];
  for (var i = 1; i < 256; i++) {
    if (i % 2 != 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(printNegatives());

// Greater Than Y
// Given an array and a value Y, count and print the number of array values
// greater then value Y.
function greaterThenY(arr, Y) {
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  console.log(count);
}

greaterThenY([5, -10, 12, 7, 8, 9, 13], 1);

// Max, Min, Average
// Given an array, print the max, min and average values for that array.
function maxMinAverage(arr) {
  max = arr[0];
  min = arr[0];
  sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr.length == 0) {
      console.log("null");
      return;
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  console.log("Max: ", max);
  console.log("Min: ", min);
  console.log("Average: ", sum / arr.length);
}

maxMinAverage([1, 2, 3]);

// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'​.
function swapNegatives() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}

var arr = [1, -2, 3, 4, 5, -6, 7];
console.log(swapNegatives(arr));

// Print Odds 1-255
// Print all odd integers from 1 to 255.
for (var i = 1; i < 256; i += 2) {
  console.log(i);
}

// Iterate and Print Array
// Iterate through a given array, printing each value.
function iteratePrint(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

iteratePrint([1, 2, 3, 4, 5, 6]);

// Get and Print Average
// Analyze an array’s values and print the average.
function printAverage(arr) {
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

printAverage([1, 2, 3, 4, 5, 6]);

// Square the Values
// Square each value in a given array, returning that same array with changed values.
function squareValues(arr) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i] * arr[i];
    newArr.push(temp);
  }
  return newArr;
}

console.log(squareValues([1, 2, 3, 4, 5, 6]));

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
function zeroNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

console.log(zeroNegatives([1, -1, 2, -2, 3, 4, 5, -6]));

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0'​ value at the
// end.
function shiftArrayValues(arr) {
  for (var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = 0;
  return arr;
}

console.log(shiftArrayValues([1, 2, 3, 4, 5]));
