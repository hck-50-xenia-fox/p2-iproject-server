if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000
const Router = require('./routers');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/',Router)

app.listen(port, () => {
    console.log(`Yuk Bisa Yuk`,port);
});

//npm start, open your browser and run localhost:port