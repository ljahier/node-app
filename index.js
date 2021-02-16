const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.end('Hello world');
})

app.get('/hello', (req, res) => {
    res.end('Hello ' + process.env.LOGNAME);
})

app.get('/hello/:name', (req, res) => {
    res.end('Hello ' + req.params.name);
})

app.listen(PORT, () => console.log(`App running on :${PORT}`));