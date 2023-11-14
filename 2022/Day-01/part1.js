"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'fs' module for file system operations
var fs = require("fs");
// Read the file 'input.txt' and store its content in 'data'
var data = fs.readFileSync("input.txt", "utf-8");
// Split the data into individual elves, each represented by a block of numbers separated by two newlines
var elves = data.split("\n\n");
// Initialize 'sum' to keep track of the current sum of numbers and 'maxSum' to store the maximum sum encountered
var sum = 0;
var maxSum = 0;
// Iterate over each elf
for (var i = 0; i < elves.length; i++) {
    // Split the current elf into individual numbers and convert them to integers
    var elf = elves[i].split("\n").map(Number);
    // Iterate over each number in the current elf
    for (var j = 0; j < elf.length; j++) {
        // If the current number is 0, compare 'sum' with 'maxSum' and update 'maxSum' if 'sum' is larger, then reset 'sum'
        if (elf[j] === 0) {
            maxSum = Math.max(maxSum, sum);
            sum = 0;
        }
        else {
            // If the current number is not 0, add it to 'sum'
            sum += elf[j];
        }
    }
}
// After iterating over all numbers, do one final comparison to catch any sum that might be larger after the last 0
maxSum = Math.max(maxSum, sum);
// Log the maximum sum to the console
console.log(maxSum);
