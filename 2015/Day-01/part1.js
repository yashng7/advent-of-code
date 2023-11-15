"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'fs' module for file system operations
var fs = require("fs");
// Read the file 'input.txt' and store its content in 'data'
var data = fs.readFileSync("input.txt", "utf-8");
// Initialize the 'floor' variable to 0. This will keep track of the current floor.
var floor = 0;
// Loop through each character in the 'data' string
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var char = data_1[_i];
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
