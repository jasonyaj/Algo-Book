function miniMaxSum(arr) {
  const SumsArray = [];
  for (let i = 0; i < arr.length; i++) {
    let tempNum = 0;
    for (let j = 0; j < 5; j++) {
      if (i == j) {
        continue;
      } else {
        tempNum += arr[j];
      }
    }
    SumsArray.push(tempNum);
  }
  const max = Math.max(...SumsArray);
  const min = Math.min(...SumsArray);
  console.log(min + " " + max);
}

// Solution from discussion board
// function miniMaxSum(arr) {
//   // Write your code here
//   const SumsArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const newArray = [...arr];
//     newArray.splice(i, 1);
//     let valueOfSum = newArray.reduce((acc, amm) => acc + amm, 0);
//     SumsArray.push(valueOfSum);
//   }
//   const maxValue = Math.max(...SumsArray);
//   const minValue = Math.min(...SumsArray);
//   console.log(`${minValue} ${maxValue}`);
// }

arr = [1, 3, 5, 7, 9]; // 16 24
arr2 = [7, 69, 2, 221, 8974]; // 299 9271
miniMaxSum(arr);
