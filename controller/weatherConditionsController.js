const fs = require('fs');
const filePath = './static/weatherConditions.json';

exports.getWeatherConditions = (req, res) => {
    const content = fs.readFileSync(filePath,"utf8");
    const weatherConditions = JSON.parse(content)
    res.send(weatherConditions);
}