const express = require('express');
const app = express();
const port = 9000;

app.get('/helloworld', (req, res) => {
    const respond = `Hello World! - Your Random Number IS ${Math.floor(Math.random() * 100)}`;
    console.log(respond);
    res.send(respond);
});

app.listen(port, () => {
    console.log(`NODE app listening on port ${port}`);
});