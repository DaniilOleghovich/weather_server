const fs = require('fs');
const filePath = './static/timeTemperature.json';

exports.getTimeTemperature = (req, res) => {
    const content = fs.readFileSync(filePath,"utf8");
    const timeTemperature = JSON.parse(content)
    res.send(timeTemperature);
}