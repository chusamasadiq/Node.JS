// Asynchronous
const fs = require('fs');

// Create directory
fs.mkdir('Assignment 02', (msg)=>{
    console.log('File directory sucessfully');
}); 

// Create file 
fs.writeFile('read.txt', 'Assignment 02', (msg)=>{
    console.log(msg);
    console.log('File created sucessfully');
} );

// Append Text
fs.appendFile('read.txt', ' is going on!...', (msg)=>{
    console.log(msg);
    console.log('Text appended successfully');
} );


// Read Text
fs.readFile('read.txt', 'UTF-8',  (msg, data)=>{
    console.log(data);
    console.log('File read successfully');
} );

//  Rename file
fs.rename('read.txt', 'myFile.txt',  (msg) =>{
    console.log('Rename file successfully');
} );

//  delete file
fs.unlink('read.txt', (msg) =>{
    console.log('File deleted successfully');
} );

//  delete directory file
fs.rmdir('read.txt', (msg) =>{
    console.log('Directory deleted successfully');
} );