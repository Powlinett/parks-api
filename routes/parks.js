const express = require('express');

const parksController = require('../controllers/parks')
const isParkValid = require('../middlewares/is-park-valid');

const router = express.Router();

router.get('/', parksController.getParks);

router.get('/:parkId', parksController.getPark);

router.get('/search', parksController.getQueriedParks);

router.post('/', isParkValid, parksController.postPark);

router.put('/:parkId', parksController.putPark);

router.delete('/:parkId', parksController.deletePark);

module.exports = router;