const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const refillDB = require('./util/refill-db');

const parksRoutes = require('./routes/parks');
const userRoutes = require('./routes/user');

const app = express();

dotenv.config();

refillDB.createParks();

const MONGO_DB_URI = `mongodb+srv://Powlinett:${process.env.MONGO_DB_PASSWORD}@parks.ercuh.mongodb.net/Parks-api?retryWrites=true&w=majority`;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/parks', parksRoutes);
app.use('/users', userRoutes);

(async () => {
  try {
    await mongoose.connect(MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    app.listen(process.env.PORT || 8080);
  } catch (error) {
    console.log(error);
  };
})();