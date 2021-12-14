const fs = require("fs");
const path = require("path");

const fileName = "day2-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");

const depths = input.split("\n");

let depth = 0;
let horizontal = 0;
let aim = 0;

depths.map((value) => {
  const operation = value.split(" ");
  if (operation[0] === "forward") {
    horizontal += parseInt(operation[1]);
    depth += aim * parseInt(operation[1]);
  }
  if (operation[0] === "up") aim -= parseInt(operation[1]);
  if (operation[0] === "down") aim += parseInt(operation[1]);
});

console.log(horizontal * depth);
