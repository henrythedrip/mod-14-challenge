require('dotenv').config();
var express = require('express');
var app = express();

port = process.env.PORT || 3001;

// this will make everything in the public folder accessible when we are using our web server.
app.use(express.static(__dirname + '/public'));

// quick test route, eventually we will use routers
app.get('/', function(req, res) {
    res.send('<h1>Hello from Heroku :)</h1>');
});

// start the webserver
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})