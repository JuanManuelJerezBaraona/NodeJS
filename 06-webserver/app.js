const express = require('express');
const app = express();
const port = 3000;

// Servir contenido estático
app.use(express.static('public'));

app.get('/otra-ruta', (req, res) => {
    res.send('Otra ruta');
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});