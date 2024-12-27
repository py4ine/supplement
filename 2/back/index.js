const express = require('express');
const cors = require('cors');
const boardRoutes = require('./Routes/boardRoutes');

const app = express();

app.use(cors());

app.use('/', boardRoutes);

app.listen(8080, () => {
    console.log("Server on 8080");
})