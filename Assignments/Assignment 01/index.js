const fs = require('fs');
// Create file with
fs.writeFileSync('bio.txt', 'Hello World : ');

// Add data to existing file
fs.appendFileSync('bio.txt', 'Welcome to Node JS');

// Read data without buffer
const data = fs.readFileSync('bio.txt');
console.log(data.toString());

// Rename file
fs.renameSync('bio.txt', 'intro.txt');

// Delete file
fs.unlinkSync('intro.txt');

// Delete folder
fs.rmdirSync('Assignments');