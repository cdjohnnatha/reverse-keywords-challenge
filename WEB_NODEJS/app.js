// load in configuration information
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const routes = require('./lib/config/routes');

const app = express();
const appRoute = '/quiz';
const i18n = require('./lib/config/i18n');


app.use(i18n.init);
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }),
);

// http://localhost:3001/quiz/test
app.use(`${appRoute}/test`, (_req, res) => {
  res.send('TESTING NODE SERVER COMPLETE');
});

// ADD YOUR CODE HERE
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Interview Quiz App started on ${process.env.PORT}`);
});


module.exports = app;
