function birthdayCakeCandles(candles) {
  candleCount = 0;
  let maxNum = 0;
  for (var i = 0; i < candles.length; i++) {
    if (candles[i] > maxNum) {
      maxNum = candles[i];
      candleCount = 1;
      console.log("New maxNum: " + maxNum);
      console.log("count: " + candleCount);
    } else if (maxNum == candles[i]) {
      candleCount++;
      console.log("maxNum: " + maxNum);
      console.log("index: " + i + " ,val: " + candles[i]);
      console.log("count: " + candleCount);
    }
  }
  return candleCount;
}

candles = [3, 2, 1, 3]; // 2
candles2 = [4, 4, 1, 4]; //3
console.log(birthdayCakeCandles(candles2));
