function staircase(n) {
  let height = n;
  let length = n;
  let draw = "";
  while (height > 0) {
    for (let i = 1; i <= length; i++) {
      // console.log("draw:" + draw);
      if (i == height || i > height) {
        draw = draw + "#";
      } else {
        draw = " " + draw;
      }
    }
    console.log(draw);
    draw = "";
    height--;
  }
}

staircase(6);
