const fs = require("fs");
const path = require("path");

const fileName = "day2-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");
const dimensions = input.split("\n");

let totalRibbon = 0;
for (line of dimensions) {
  let currentBox = getSortedDimensions(line);
  sideA = currentBox[0] * currentBox[1];
  sideB = currentBox[1] * currentBox[2];
  sideC = currentBox[0] * currentBox[2];

  totalRibbon += currentBox[0] * 2 + currentBox[1] * 2;
  totalRibbon += currentBox[0] * currentBox[1] * currentBox[2];
}

console.log(totalRibbon);

function getSortedDimensions(dimensions) {
  return dimensions
    .split("x")
    .map((x) => parseInt(x))
    .sort((a, b) => a - b);
}
