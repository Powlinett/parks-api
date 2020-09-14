const express = require('express');

const parksRoutes = require('./routes/parks')

const app = express();

app.use('/api', parksRoutes);

app.listen(8080);