const route                 = require('express').Router()
, { Error }             = require('../../helpers/error')


route.get('/', (req, res) => {
    res.send("HELP ME GOD")
});