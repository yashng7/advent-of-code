// Import the 'fs' module for file system operations
import * as fs from "fs";

// Read the file 'input.txt' and store its content in 'data'
const data = fs.readFileSync("input.txt", "utf-8");

// Initialize the 'floor' variable to 0. This will keep track of the current floor.
let floor = 0;

// Initialize the 'position' variable to 0. This will keep track of the current position in the instructions.
let position = 0;

// Loop through each character in the 'data' string
for (let char of data) {
  // Increment the 'position' variable by 1
  position++;

  // If the character is an opening parenthesis, increment 'floor' by 1
  if (char === "(") {
    floor++;
  } 
  // If the character is a closing parenthesis, decrement 'floor' by 1
  else if (char === ")") {
    floor--;
  }

  // If 'floor' is less than 0, log the 'position' variable and break the loop
  if (floor < 0) {
    console.log("Santa enters the basement at position: " + position);
    break;
  }
}
