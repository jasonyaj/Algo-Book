arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let difference = 0;
  let primary = 0;
  let secondary = 0;
  for (let i = 0; i < arr.length; i++) {
    primary += arr[i][i];
    secondary += arr[i][arr.length - i - 1];
  }
  // console.log(primary);
  // console.log(secondary);
  difference = Math.abs(primary - secondary);
  return difference;
}

console.log(diagonalDifference(arr));
