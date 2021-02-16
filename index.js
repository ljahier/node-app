const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.end('Hello world');
})

app.get('/hello', (req, res) => {
    res.end('Hello ' + process.env.LOGNAME);
})

app.listen(PORT, () => console.log(`App running on :${PORT}`));