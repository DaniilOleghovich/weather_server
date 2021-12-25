const express = require('express');
const currentConditionController = require('../controller/currentConditionController');
const currentCondition = express.Router();

currentCondition.get('/condition', currentConditionController.getCurrentCondition);

module.exports = currentCondition;