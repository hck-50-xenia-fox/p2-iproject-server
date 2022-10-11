const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('masuk bang');
});

app.listen(port, () => {
    console.log(`Yuk Bisa Yuk`,port);
});

//npm start, open your browser and run localhost:port