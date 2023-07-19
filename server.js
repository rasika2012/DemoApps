const express = require('express');
const app = express();
const port = 9090;

app.get('/helloworld', (req, res) => {
    const respond = `Hello World! - Your Random Number IS ${Math.floor(Math.random() * 100)}`;
    console.log(respond);
    res.send(respond);
});

app.get('/helloworld/:name', (req, res) => {
    const respond = `Hello World! - Your Random Number IS 2 ${Math.floor(Math.random() * 100)}`;
    console.error(req.params.name);
    console.log(respond);
    res.send(respond);
});

app.listen(port, () => {
    console.log(`NODE app listening on port ${port}`);
});