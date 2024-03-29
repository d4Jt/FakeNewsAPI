const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

app.use(session({
   secret: 'secret_key',
   resave: false,
   saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
   cors({
      origin: '*',
   })
);



const routes = require('./routes');

routes(app);

module.exports = app;
