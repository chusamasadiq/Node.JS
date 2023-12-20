const path = require('path');

console.log(path.dirname('E:/Node JS/Day 04/index.js'));
console.log(path.extname('E:/Node JS/Day 04/index.js'))
console.log(path.basename('E:/Node JS/Day 04/index.js'))

 const myPath = path.parse('E:/Node JS/Day 04/index.js')
 console.log(myPath);
 console.log(myPath.name);