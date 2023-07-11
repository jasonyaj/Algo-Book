function timeConversion(s) {
  let newStr = "";
  let count = 0;
  if (s.includes("AM")) {
    let timeStr = "";
    for (let number in s) {
      if (s[number] == ":" || s[number] == "A") {
        if (s[number] === "A") {
          newStr += timeStr;
          break;
        }
        timeStr += ":";
        count += 1;
        if (timeStr === "12:" && count == 1) {
          timeStr = "00:";
          newStr += timeStr;
          timeStr = "";
        } else {
          newStr += timeStr;
          timeStr = "";
        }
      } else {
        timeStr += s[number];
      }
    }
  }
  if (s.includes("PM")) {
    let timeStr = "";
    for (let number in s) {
      if (s[number] == ":" || s[number] == "P") {
        if (s[number] === "P") {
          newStr += timeStr;
          break;
        }
        timeStr += ":";
        count += 1;
        if (count == 1) {
          if (timeStr == "12:") {
            newStr += timeStr;
            timeStr = "";
          } else {
            timeStr = parseInt(timeStr) + 12;
            newStr += timeStr + ":";
            timeStr = "";
          }
        } else {
          newStr += timeStr;
          timeStr = "";
        }
      } else {
        timeStr += s[number];
      }
    }
  }
  return newStr;
}

let s = "12:01:11PM"; // '12:01:11'
let s2 = "12:01:11AM"; // '00:01:11'
let s3 = "07:05:45PM"; // '19:05:45'
let s4 = "12:00:00AM"; // '00:00:00'
console.log(timeConversion(s));
console.log(timeConversion(s2));
console.log(timeConversion(s3));
console.log(timeConversion(s4));
