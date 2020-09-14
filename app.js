const express = require('express');
const bodyParser = require('body-parser');

const parksRoutes = require('./routes/parks');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', parksRoutes);

app.listen(8080);