const express = require('express');
const timeTemperatureController = require('../controller/timeTemperatureController');
const timeCondition = express.Router();

timeCondition.get('/temperature', timeTemperatureController.getTimeTemperature);

module.exports = timeCondition;