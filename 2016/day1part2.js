const fs = require("fs");
const path = require("path");

const fileName = "day1-input.txt";

const filePath = path.join(__dirname, fileName);
const input = fs.readFileSync(filePath, "utf8");

class PositionTracker {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "N";
    this.positionHistory = new Set();
  }

  move(instruction) {
    const turnDirection = instruction[0];
    const blocks = Number(instruction.slice(1));

    this.updateDirection(turnDirection);

    for (let i = 0; i < blocks; i++) {
      this.updatePosition(1);
    }
  }

  updateDirection(turnDirection) {
    if (turnDirection === "L") {
      if (this.direction === "N") this.direction = "W";
      else if (this.direction === "W") this.direction = "S";
      else if (this.direction === "S") this.direction = "E";
      else this.direction = "N";
    } else {
      if (this.direction === "N") this.direction = "E";
      else if (this.direction === "W") this.direction = "N";
      else if (this.direction === "S") this.direction = "W";
      else this.direction = "S";
    }
  }

  updatePosition(blocks) {
    if (this.direction === "N") this.y += blocks;
    else if (this.direction === "W") this.x -= blocks;
    else if (this.direction === "S") this.y -= blocks;
    else if (this.direction === "E") this.x += blocks;

    const newPosition = `${this.x},${this.y}`;
    if (this.positionHistory.has(newPosition)) {
      console.log("Repeat position found: ", newPosition);
      process.exit();
    }

    this.positionHistory.add(newPosition);
  }
}

santaLocation = new PositionTracker();

const instructions = input.split(", ");
for (instruction of instructions) {
  santaLocation.move(instruction);
}

const distanceFromStart = Math.abs(santaLocation.x) + Math.abs(santaLocation.y);
console.log(distanceFromStart);
