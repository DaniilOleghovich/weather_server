const fs = require('fs');
const filePath = './static/currentCondition.json';

exports.getCurrentCondition = (req, res) => {
    const content = fs.readFileSync(filePath,"utf8");
    const currentCondition = JSON.parse(content)
    res.send(currentCondition);
}