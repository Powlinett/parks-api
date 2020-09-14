const express = require('express');

const parksController = require('../controllers/parks')

const router = express.Router();

router.get('/parks', parksController.getParks);

router.post('/parks', parksController.postPark);

module.exports = router