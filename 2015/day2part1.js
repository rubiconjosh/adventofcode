const fs = require("fs");
const path = require("path");

const fileName = "day2-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");
const dimensions = input.split("\n");

let totalPaper = 0;
for (line of dimensions) {
  currentBox = getSortedDimensions(line);
  sideA = currentBox[0] * currentBox[1];
  sideB = currentBox[1] * currentBox[2];
  sideC = currentBox[0] * currentBox[2];

  totalPaper += 2 * sideA + 2 * sideB + 2 * sideC;
  totalPaper += sideA;
}

console.log(totalPaper);

function getSortedDimensions(dimensions) {
  return dimensions
    .split("x")
    .map((x) => parseInt(x))
    .sort();
}
