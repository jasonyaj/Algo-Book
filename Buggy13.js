/* 
  The “Buggy 13”

  Below are solutions to the “Basic 13” algorithms.

  Unfortunately, some of these solutions contain errors.
  Which ones have bugs, and what are they?
*/

// Print1To255()
// Print all the integers from 1 to 255.
function print1to255() {
  var num = 1;
  while (num <= 255) { //= added otherwise only up to 254
    console.log(num);
    num = num + 1;
  }
}

// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and the sum so far.
function printSum0to255() {
  var sum = 0;
  for (var num = 0; num <= 255; num++) {
    sum += num;
  }
  console.log(sum); //added console log to print
  return sum;
}

// PrintMaxOfArray(arr)  
// Print the largest element in a given array.
function printArrayMax(arr) {  
  if (arr.length == 0) {
    console.log('[], no max val.');
    return;
  }
  var max = arr[0]; //set max to array index 0 to account for
  for (var idx = 1; idx < arr.length; idx++) {
    if (arr[idx] > max) {
      max = arr[idx];
    }
  }
  console.log('Max value is:', max);
}

// PrintOdds1To255()
// Print all odd integers from 1 to 255.
function printOdds1to255() {
  var num = 1;
  while (num <= 255) {
    if(num % 2 !== 0) { //added modulo to find odd numbers
      console.log(num); //took away the "+2"
    }
    num++; //added for looping
  }
}
printOdds1to255();

function printOdds1to255() {
  var num = 1;
  while (num <= 255) {
    console.log(num); //moved "+2" out
    num += 2; // added in to count only odds skipping evens when starting with var=1
  }
}
printOdds1to255();

// PrintArrayVals(arr)
// Print all values in a given array.
function printArrayValues(arr) {
  for (var idx = 0; idx < arr.length; idx++) { //added "(" before "var" and changed "arr++" to "idx++"
    console.log("array[", idx, "] =", arr[idx]);
  }
}
printArrayValues([1, 2, 3, 4, 5]);

// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
arr = [1, 4, 7, 2, 5, 8];
function printAverageOfArray() { //added a function line to the code
  if (arr.length == 0) {
    console.log('[ ], no avg val.');
    return;
  }
  var sum = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    sum += arr[idx];
  }
  console.log('Avg val:', sum / arr.length);
}

printAverageOfArray()


// ReturnOddsArray1To255()
// Create & return array with odd integers 1-255.
function oddArray1to255() {
  var oddArray = [];
  for (var num = 1; num <= 255; num += 2) {
    oddArray.push(num);
  }
}

// ReturnArrayCountGreaterThanY(arr, y)
// Given an array, return count greater than Y.
function numGreaterThanY(arr, y) {
  var numGreater = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > y) {
      numGreater = arr[idx]; //originally they had "numGreater++"
    }
  }
  return numGreater; //they had return "arr[y]"
}

console.log(numGreaterThanY([1,2,3,4,5], 2));

// PrintMaxMinAverageArrayVals(arr)
// Print the max, min and average array values.
function maxMinAverage(arr) {
  if (arr.length == 0) {
    return;
  }
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for (var idx = 1; idx <= arr.length; idx++) {
    sum += arr[idx];
    if (arr[idx] < min) {
      min = arr[idx];
    }
    if (arr[idx] > max) {
      max = arr[idx];
    }
  }
  console.log(min);
  console.log(max);
  console.log(sum);
  return min;
  return max;
  return sum/arr.length; // they had "return avg", avg is not defined
}

console.log(maxMinAverage([1,2,3,4,5]));

// SquareArrayVals(arr)
// Given an array, square each value in the array.
function squareArrVals(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx] + arr[idx];
  }
}

// ZeroOutArrayNegativeVals(arr)
// Given an array, set negative values to zero.
setNegsToZero(arr) {
  for (var idx = 0;idx < arr.length; idx++){
    if (arr[idx] < 0) { arr[idx]=0; }
  }
}

// ShiftArrayValsLeft(arr)
// Shift array values forward, leaving '0' at end.
function arrShift(arr) {
  for (var idx = 1; idx < arr.length; idx++) {
    arr[idx - 1] = arr[idx];
  }
  arr.length--;
  return arr;
}

// SwapStringForArrayNegativeVals(arr)
// Replace negative array values with 'Dojo'.
function subStringForNegs(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (idx < 0) {
      arr[idx] = 'Dojo';
    }
  }
  return arr;
}