const express = require('express');
const router = express.Router()
const WeatherController = require('../controllers/weatherController');


router.get('/:data', WeatherController.getAll)


module.exports = router