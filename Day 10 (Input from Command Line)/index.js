const fs = require('fs');

//console.log(process);
//console.log(process.argv);

 const input = process.argv;
 
// Creating file and adding text
fs.writeFileSync(input[2], input[3]);

