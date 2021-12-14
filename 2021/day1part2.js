const fs = require("fs");
const path = require("path");

const fileName = "day1-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");

const depths = input.split("\n");

const slidingWindow = [];
depths.map((value, index, array) => {
  if (index + 2 < array.length) {
    slidingWindow.push(
      parseInt(value) + parseInt(array[index + 1]) + parseInt(array[index + 2])
    );
  }
});

let increases = 0;
slidingWindow.map((value, index, array) => {
  if (index !== 0) {
    const previousValue = array[index - 1];
    increases += value > previousValue ? 1 : 0;
  }
});

console.log(increases);
