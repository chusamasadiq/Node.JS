const express = require('express');
const path = require('path');

const app = express();
const publicDirPath = path.join(__dirname, 'public');

//app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
    res.sendFile(`${publicDirPath}/index.html`);
})

app.get('/contact', (req, res) => {
    res.sendFile(`${publicDirPath}/contact.html`);
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicDirPath}/about.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${publicDirPath}/error.html`);
});

app.listen(4200)