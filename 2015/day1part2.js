const fs = require("fs");
const path = require("path");

const fileName = "day1-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");

const instructions = input.split("");
let currentFloor = 0;
for (let i = 0; i < instructions.length; i++) {
  const direction = instructions[i];
  direction === "(" ? (currentFloor += 1) : (currentFloor -= 1);
  if (currentFloor < 0) {
    console.log(i + 1);
    process.exit();
  }
}
