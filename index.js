require('dotenv').config();

const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const router = require('./controllers');

var express = require('express');
var app = express();

port = process.env.PORT || 3001;

// this will make everything in the public folder accessible when we are using our web server.
app.use(express.static(__dirname + '/public'));


// here we make a session object that manages user sessions and expires the cookie eventually.
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1800000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // TODO: figure out session storage
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

app.use(session(sess))

const hbs = exphbs.create({});

// Setting app engine and view engine (allowing ourselves to use templates)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// This is our middleware (software run by webserver each time a request is made)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

// Creates router that knows which handler to use
app.use(router);

// start the webserver
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})