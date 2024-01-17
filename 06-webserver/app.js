const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/otra-ruta', (req, res) => {
    res.send('Otra ruta');
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});