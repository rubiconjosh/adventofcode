const fs = require("fs");
const path = require("path");

const fileName = "day1-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");

const depths = input.split("\n");

let increases = 0;
depths.map((value, index, array) => {
  if (index !== 0) {
    const previousValue = array[index - 1];
    increases += parseInt(value) > parseInt(previousValue) ? 1 : 0;
  }
});

console.log(increases);
