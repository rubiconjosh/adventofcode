const fs = require("fs");
const path = require("path");

const fileName = "day2-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");

const depths = input.split("\n");

let horizontal = 0;
let vertical = 0;

depths.map((value) => {
  const operation = value.split(" ");
  if (operation[0] === "forward") horizontal += parseInt(operation[1]);
  if (operation[0] === "up") vertical -= parseInt(operation[1]);
  if (operation[0] === "down") vertical += parseInt(operation[1]);
});

console.log(horizontal * vertical);
