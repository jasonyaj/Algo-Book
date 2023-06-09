/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue)

// Mann team solution
function socialDistancingEnforcer(queue) {
  var personIndexArr = [];
  for (var i = 0; i < queue.length; i++) {
      if (queue[i] == 1) {
          personIndexArr.push([i]);
          if (personIndexArr.length == 2) {
              if (Math.abs(personIndexArr[1] - personIndexArr[0]) < 6) {
                  return false
              }
              else {
                  personIndexArr.shift();
              }
          }
      }
  }
  return true
}

// Devin team solution
function socialDistancingEnforcer(queue) {
  let index = -1;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] == 1) {
      if (index != -1) {
        if (!(index + 6 <= i)) {
          return false;
        }
      }
      index = i;
    }
  }
  return true;
}

// Our team solution
/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
  if (queue.length == 0) {
    return true;
  }

  let lineStarted = false;
  let count = 0;

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] == 0 && lineStarted) {
      // if 0 and person found
      count++;
    } else if (queue[i] == 1 && !lineStarted) {
      // if 1st person found
      lineStarted = true;
    } else if (queue[i] == 1 && count < 6 && lineStarted) {
      // if found person and count is < 6
      return false;
    } else if (lineStarted && queue[i] == 1) {
      // reset if 1st person found and another person found
      count = 0;
    }
    continue;
  }
  return true;
}