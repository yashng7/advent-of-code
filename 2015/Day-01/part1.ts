// Import the 'fs' module for file system operations
import * as fs from "fs";

// Read the file 'input.txt' and store its content in 'data'
const data = fs.readFileSync("input.txt", "utf-8");

// Initialize the 'floor' variable to 0. This will keep track of the current floor.
let floor = 0;

// Loop through each character in the 'data' string
for (let char of data) {
  // If the character is an opening parenthesis, increment 'floor' by 1
  if (char === "(") {
    floor++;
  } 
  // If the character is a closing parenthesis, decrement 'floor' by 1
  else if (char === ")") {
    floor--;
  }
}

// Log the final floor number
console.log(floor);
