const express = require('express');
const app = express();
const cors = require('cors');
const port = require('./config/ServerConfig');
// const cors = require('./config/ServerConfig'); //how to transfer cors settings to config file???

const timeCondition = require('./routes/timeTemperatureRoute');
const dayCondition = require('./routes/dayConditionRoute');
const currentCondition = require('./routes/currentConditionRoute');


app.use(cors({
    origin: '*'
}));
app.use('/time', timeCondition);
app.use('/day', dayCondition);
app.use('/current', currentCondition);

app.listen(port.PORT, () => {
    console.log(`Server listen port ${port.PORT}`)
})