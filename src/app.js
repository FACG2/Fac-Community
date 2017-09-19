const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const controllers = require('./controller/index');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);
app.use(passport.initialize());
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
