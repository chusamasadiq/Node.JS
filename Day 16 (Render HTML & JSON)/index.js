const express = require('express');

// executable state
const app = express();

// Routes

app.get('', (request, response) => {
    // Data sent from browser
    response.send('<h1> Welcome to HTML and JSON in Node JS </h1>\
    <a href="/about"> About Us </a>'
    );
});

app.get('/about', (request, response) => {
    response.send(
        '<input type="text" placeholder="Username"/> \
        <button type="button">Submit</button>\
        <a href="/about"> Back to Home </a>'
        
    )
});

app.get('/contact', (request, response) => {
    response.send(
        [{
            "name": "Usama Sadiq",
            "email": "usamasadiq163@gmail.com"
        },
        {
            "name": "Usama Sadiq",
            "email": "usamasadiqdev@gmail.com"
        },]
    );
});

app.listen(4200);