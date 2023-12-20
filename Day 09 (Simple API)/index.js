/* API Development 
req  : Request 
resp : Response
*/

// Simple API
const http = require('http');
const data = require('./data');

http.createServer((req, resp)=>{
resp.writeHead(200, {'Content-Type' : 'application\json'});

// Single data in api 
//resp.write(JSON.stringify({name: 'Usama Sadiq', email: 'usamasadiq163@gmail.com'}));

// Mutiple data in api from other file
resp.write(JSON.stringify(data))
resp.end();    

}).listen(4200);