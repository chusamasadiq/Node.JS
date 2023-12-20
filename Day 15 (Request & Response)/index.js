const express = require('express');

// executable state
const app = express();

// Routes

app.get('', (request, response) => {
    // Data sent from browser
    console.log('Data sent from browser:', request.query.name);
    response.send('Hello, This is home page:' + request.query.name);
});

app.get('/about', (request, response) => {
    response.send('Hello, This is about page');
});

app.get('/contact', (request, response) => {
    response.send('Hello, This is contact page');
});

app.listen(4200);