const express = require('express');
const app = express();
const cors = require('cors');
const port = require('./config/ServerConfig');

const timeCondition = require('./routes/weatherConditionsRoute');

app.use(cors({
    origin: '*'
}));
app.use('', timeCondition);

app.listen(port.PORT, () => {
    console.log(`Server listen port ${port.PORT}`)
})