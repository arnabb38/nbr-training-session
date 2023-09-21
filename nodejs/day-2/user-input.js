// Importing the module
// npm install readline-sync

const readline = require("readline-sync");

// Enter the number
console.log("How many numbers to import: ");
let a = Number(readline.question());
let number = [];

console.log("Please enter your numbers: ");
for (let i = 0; i < a; ++i) {
    number.push(Number(readline.question()));
}

console.log(number);