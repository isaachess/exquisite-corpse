import express from 'express';

// Resources
var path = require('path');

var app = express();
var publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'))
});

var server = app.listen(1337, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
