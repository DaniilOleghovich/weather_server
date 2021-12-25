const fs = require('fs');
const filePath = './static/dayCondition.json';

exports.getDayCondition = (req, res) => {
    const content = fs.readFileSync(filePath,"utf8");
    const dayCondition = JSON.parse(content)
    res.send(dayCondition);
}