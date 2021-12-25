const express = require('express');
const dayConditionController = require('../controller/dayConditionController');
const dayCondition = express.Router();

dayCondition.get('/condition', dayConditionController.getDayCondition);

module.exports = dayCondition;