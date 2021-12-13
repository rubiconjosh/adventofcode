const fs = require("fs");
const path = require("path");

const fileName = "day1-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");

let currentFloor = 0;
for (direction of input)
  direction === "(" ? (currentFloor += 1) : (currentFloor -= 1);

console.log(currentFloor);
