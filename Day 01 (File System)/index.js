/* Introduction to Node JS and Modules */

// Include Module
const fs = require('fs');

// Create New File 
fs.writeFileSync('read.txt', 'Welcome to Node JS');

// Ovreride data in file
fs.writeFileSync('read.txt', 'Welcome to Node JS : Good Luck : Usama Sadiq : ');

// Append data in file
fs.appendFileSync('read.txt', 'Thank you');

// Read data from file : Note Read file return data in Buffer : Binary Format  
const dataset = fs.readFileSync('read.txt');

// Binary format
console.log(dataset);

// In original format
console.log(dataset.toString());

// Rename file name
fs.renameSync('read.txt', 'readwrite.txt');