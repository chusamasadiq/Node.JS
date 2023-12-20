const http = require('http');

// req: Request
// resp: Response


http.createServer((req, resp) => {
    resp.write("<h1> Hello Usama!, Welcome to Node JS </h1>");
    resp.end();
}).listen(4200);


// Understanding of Arrow function

/* http.createServer(dataControl).listen(4200);
function dataControl(req, resp){
    resp.write("<h1> Hello Usama!...</h1>");
    resp.end();
}
*/
