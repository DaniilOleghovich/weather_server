const express = require('express');
const app = express();
const port = 3000;

const urlencodedParser = express.urlencoded({extended: false});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// Query params (ex: http://localhost:3000/user?id=2&name=Daniil)
app.get('/user', (req, res) => {
    let id = req.query.id;
    let name = req.query.name;
    res.send('Request get from user with id= ' + id + ' and name= ' + name);
})

//Request Params (ex: http://localhost:3000/user/6/name/Daniil)
app.get('/user/:userId/name/:userName', (req, res) => {
    let userId = req.params['userId'];
    let userName = req.params['userName'];
    res.send(`User id: ${userId} User Name: ${userName}`)
})

// Processing request. Getting body from request (ex: Processing of form data)
app.post('/', urlencodedParser ,(req, res) => {
    console.log(req.body.userName);
    res.send(`${req.body.userName} - ${req.body.userAge}`)
})

app.listen(port, () => {
    console.log('Server listen 3000 port')
})