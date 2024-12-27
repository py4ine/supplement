const express = require('express');
const cors = require('cors')
const testRoutes = require('./Routes/testRoutes')
const db = require('./Database/db');

const app = express();

app.use(express.json())
app.use(cors())

db.connect();

app.get('/', (req, res) => {
    res.send({message : 'Hello node'});
})

app.post('/', (req, res) => {
    console.log(req.body)
    const body = req.body;
    res.send({message : body.message1});
})

app.post('/post', (req, res) => {
    const body = req.body;
    res.send(body.message);
})

// app.get('/test', (req, res) => {
//     res.send('test test test');
// })

app.listen(8000, () => {
    console.log("8000 port server on");
})
