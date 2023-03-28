// // Sigma
// // Implement a function sigma(num)​ that, given a
// // number, returns the sum of all positive integers
// // from 1 up to number (inclusive). Ex.: sigma(3)
// // = 6 (or 1+2+3); sigma(5)​ = 15 (or 1+2+3+4+5).
// function sigma(num) {
//   sum = 0;
//   for (var i = 1; i <= num; i++) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }

// sigma(3);

// // Factorial
// // Write a function factorial(num)​ that, given a
// // number, returns the product (multiplication) of all
// // positive integers from 1 up to number (inclusive).
// // For example, factorial(3)​ = 6 (or 1 * 2 * 3);
// // factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5).
// function factorial(num) {
//   product = 1;
//   for (var i = 1; i <= num; i++) {
//     product *= i;
//   }
//   console.log(product);
//   return product;
// }

// factorial(5);

// // Threes and Fives
// // Create function ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value
// // is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
// function ThreesFives() {
//   sum = 0;
//   for (var i = 100; i <= 4000000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       sum += 0;
//     } else if (i % 5 === 0) {
//       sum += i;
//     } else if (i % 3 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }

// ThreesFives();
// // Second:​ Change your function to make a BetterThreesFives(start,end)​where start and end
// // values are customizable. You can think of the above ThreesFives()​ function as
// // BetterThreesFives(100,4000000)​.
// function BetterThreesFives(start, end) {
//   sum = 0;
//   for (var i = start; i <= end; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       sum += 0;
//     } else if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }

// BetterThreesFives(100, 4000000);

// // Generate Coin Change
// // Implement generateCoinChange(cents)​ that accepts a parameter for the number of cents, and
// // computes how to represent that amount with the smallest number of coins. Console.log the result.
// var coins = []; // create variable = [store coin type and count in here]
// var quarter = 0;
// var dime = 0;
// var nickel = 0;
// var penny = 0;
// var remainder = 0;
// function generateCoinChange(cents) {
//   console.log('cents: ' + cents);
//   for (var i = cents; i > 0; i = remainder) {
//     if (i > 24) {
//       quarter = Math.floor(i / 25); //log the integer into quarter
//       remainder = i % 25; //take the remainder loop it back up to check if still greater then 0
//       // console.log("remainder: " + remainder);
//     } else if (i < 25 && i > 9) {
//       dime = Math.floor(i / 10);
//       remainder = remainder % 10;
//       // console.log("remainder: " + remainder);
//     } else if (i < 10 && i > 4) {
//       nickel = Math.floor(i / 5);
//       remainder = remainder % 5;
//       // console.log("remainder: " + remainder);
//     } else {
//       penny = i / 1;
//       remainder = 0;
//       // console.log("remainder: " + remainder);
//       // console.log("remainder: " + remainder);
//     }
//   }
//   console.log(quarter + " quarter(s)");
//   console.log(dime + " dime(s)");
//   console.log(nickel + " nickel(s)");
//   console.log(penny + " penny(s)");
// }
// generateCoinChange((Math.floor(Math.random()*100)));

/**Statistics to Doubles
Implement a ‘die’ that randomly returns an
integer between 1 and 6 inclusive. Roll a pair of
these dice, tracking the statistics until doubles
are rolled. Display the number of rolls, min, max,
and average. */
// function doubleDice() {
//   rolls = 0;
//   min = 7;
//   max = 0;
//   sum = 0;
//   for (var i = 1; i < 50; i++) {
//     die1 = Math.floor(Math.random() * 6 + 1);
//     die2 = Math.floor(Math.random() * 6 + 1);
//     // console.log(die1, die2);
//     lowest = Math.min(die1, die2);
//     highest = Math.max(die1, die2);
//     // console.log("lowest:" + lowest, "highest: " + highest);
//     sum += die1 +die2;
//     rolls = i;
//     if (die1 == die2 && (lowest < min && highest > max)) {
//       min = Math.min(die1, die2);
//       max = Math.max(die1, die2);
//       console.log(rolls, min, max, sum/rolls);
//       return;
//     } else if (die1 == die2 && (lowest < min || highest > max)) {
//       if (lowest < min) {
//         min = lowest;
//       } else
//       max = highest;
//       console.log(rolls, min, max, sum/rolls);
//       return;
//     } else if (die1 == die2) {
//       console.log(rolls, min, max, sum/rolls);
//       return;
//     } else if (lowest < min && highest > max) {
//         min = Math.min(die1, die2);
//         max = Math.max(die1, die2);
//         // console.log("First:" + rolls, min, max);
//     } else if (lowest < min || highest > max) {
//       if (lowest < min) {
//         min = lowest;
//       } else
//         max = highest;
//       // console.log("Second:" + rolls, min, max);
//     }
//   }
// }

// doubleDice();

/**Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result. */
// sum = 0;
// function sumTo(num) {
//   for (var i = num; i > 0; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumTo(100));

/**Fibonacci
Implement the Fibonacci function, a famous mathematical equation that generates a numerical
sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0
and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which
Fibonacci number.
Examples: fibonacci(2)​ = 1, fibonacci(3)​ = 2, fibonacci(4)​ = 3, fibonacci(5)​ = 5, etc. */
// function fibonacci(num) {
//   // make an if statement for when the argument is "0" or "1"
//   var sum = num - 1 + (num - 2);
//   return sum;
// }

// console.log(fibonacci(5));

/**Last Digit of A to the B
Modern computers can handle very large numbers, but this ability has limits. If a number is repeatedly
multiplied by itself, it eventually exceeds the computer’s ability to accurately represent it. (Side note: the
number of times it is multiplied by itself is called the exponent.) 
Implement a function that accepts two non-negative integers as arguments. Function lastDigitAtoB(a,
b)​ should return the last digit of the first number (a) raised to an exponent of the second number (b).
Examples: given (3, 4)​, you should return 1​ (the last digit of 81: 3 * 3 * 3 * 3). Given (12, 5)​, return
2​ (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12). */
// function lastDigitAtoB(num1, num2) {
//   var expo = String(num1 ** num2);
//   console.log(expo);
//   console.log(expo[expo.length-1]);
// }

// lastDigitAtoB(12, 5);

/**For an optional end-of-chapter challenge, determine the smallest (least significant) digit of a number 
that is potentially very, very large. You may find that you must do this without computing the actual 
(unimaginably large) number. */

  //find the relationship between the num1 "ones" place digit and num2 to find a pattern then write if loops/conditions so no math is needed
// function lastDigitAtoB(num1, num2) {
//  //code here
// }

// lastDigitAtoB(12, 1); //last digit is 2
// lastDigitAtoB(12, 2); //last digit is 4
// lastDigitAtoB(12, 3); //last digit is 8
// lastDigitAtoB(12, 4); //last digit is 6
// lastDigitAtoB(12, 5); //last digit is 2
// lastDigitAtoB(12, 6); //last digit is 4
// lastDigitAtoB(12, 7); //last digit is 8
// lastDigitAtoB(12, 8); //last digit is 6
// lastDigitAtoB(12, 9); //last digit is 2
// lastDigitAtoB(12, 10); //last digit is 4
// lastDigitAtoB(12, 11); //last digit is 8

/**Clock Hand Angles
Traditional clocks are increasingly uncommon, but most can still read rotating hands of hours, minutes,
and seconds.
Create function clockHandAngles(seconds)​ that, given the number of seconds since 12:00:00, will
print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360
degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands. */