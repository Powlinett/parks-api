const express = require('express');

const parksController = require('../controllers/parks')

const router = express.Router();

router.get('/parks', parksController.getParks);

module.exports = router