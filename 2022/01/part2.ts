// Import the 'fs' module for file system operations
import * as fs from "fs";

// Read the file 'input.txt' and store its content in 'data'
const data = fs.readFileSync("input.txt", "utf-8");

// Split the data into individual elves, each represented by a block of numbers separated by two newlines
const elves = data.split("\n\n");

// Initialize 'sum' to keep track of the current sum of numbers and 'maxSums' to store the top three maximum sums encountered
let sum = 0;
let maxSums = [0, 0, 0];

// Iterate over each elf
for (let i = 0; i < elves.length; i++) {
  // Split the current elf into individual numbers and convert them to integers
  const elf = elves[i].split("\n").map(Number);

  // Iterate over each number in the current elf
  for (let j = 0; j < elf.length; j++) {
    // If the current number is 0, add 'sum' to 'maxSums', sort 'maxSums' in descending order, keep only the top three elements in 'maxSums', and reset 'sum'
    if (elf[j] === 0) {
      maxSums.push(sum);
      maxSums.sort((a, b) => b - a);
      maxSums.length = 3;
      sum = 0;
    } else {
      // If the current number is not 0, add it to 'sum'
      sum += elf[j];
    }
  }
}

// After iterating over all numbers, do one final comparison to catch any sum that might be larger after the last 0
maxSums.push(sum);
maxSums.sort((a, b) => b - a);
maxSums.length = 3;

// Log the maximum sum to the console
console.log(maxSums);
