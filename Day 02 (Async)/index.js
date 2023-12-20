const fs =  require('fs');

fs.writeFile('read.txt', 'File Asynchronously', (msg)=>{
    console.log('File is created');
    console.log(msg);
});

fs.appendFile('read.txt', ' in Node JS', (msg)=>{
    console.log('Text append in file successfully');
    console.log(msg);
});

fs.readFile('read.txt', 'UTF-8', (msg, data)=>{
    console.log(data);
    console.log(msg);
});