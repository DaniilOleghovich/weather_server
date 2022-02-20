const express = require('express');
const timeTemperatureController = require('../controller/weatherConditionsController');
const conditions = express.Router();

conditions.get('/conditions', timeTemperatureController.getWeatherConditions);

module.exports = conditions;