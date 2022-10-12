if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
} else if (process.env.NODE_ENV === 'production') {
    console.log = function () {};
}

const cors          = require('cors')
    , express       = require('express')
    , app           = express()
    
    // ROUTE 
    , route    = require('');

app.use(cors())
app.use(express.urlencoded({ extended : false }))
app.use(express.json());

// BASE ENDPOINT
app.use('/', route)

module.exports = app