const express = require('express');

const apiKeyMiddleware = require('../middlewares/apikey');
const isParkValid = require('../middlewares/is-park-valid');
const parksController = require('../controllers/parks');

const router = express.Router();

router.get('/', parksController.getParks);

router.get('/:parkId', parksController.getPark);

router.get('/search', parksController.getQueriedParks);

router.post('/', apiKeyMiddleware, isParkValid, parksController.postPark);

router.put('/:parkId', apiKeyMiddleware, isParkValid, parksController.putPark);

router.delete('/:parkId', apiKeyMiddleware, parksController.deletePark);

module.exports = router;