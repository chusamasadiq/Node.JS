const express = require('express');

// executable state
const app = express();

// Routes

app.get('', (request, response) => {
    response.send('Hello, This is home page');
});

app.get('/about', (request, response) => {
    response.send('Hello, This is about page');
});

app.get('/contact', (request, response) => {
    response.send('Hello, This is contact page');
});

app.listen(4200);