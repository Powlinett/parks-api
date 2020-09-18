const express = require('express');

const parksController = require('../controllers/parks')

const router = express.Router();

router.get('/', parksController.getParks);

router.get('/:parkId', parksController.getPark);

router.get('/search', parksController.getQueriedParks);

router.post('/', parksController.postPark);

router.patch('/:parkId', parksController.patchPark);

router.delete('/:parkId', parksController.deletePark);

module.exports = router;