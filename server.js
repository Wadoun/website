/**
 * Node server
 */

'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const environment = require('./config/environments');
const routes = require('./config/routes');
const locales = require('./config/locales');
const exphbs = require('express-handlebars');

const app = express();

// Support encoded bodies
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// Use morgan to log incomming requests
app.use(morgan('dev'));
// Set the '/public' folder as public directory for assets delivery
app.use(express.static(path.join(__dirname, 'public')));
// Use cookie parser to read request cookies
app.use(cookieParser());

// Init custom middlewares
app.use(locales);

// Set handlebars as view engine for this application
app.set('views', './views');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Setup cache and compression
app.set('view cache' , environment.view_cache)

// Load routes
routes(app);
app.listen(environment.env.port, () => {
    console.log(`Listening on http://${environment.env.host}:${environment.env.port} Mode: ${app.settings.env}`)
});
