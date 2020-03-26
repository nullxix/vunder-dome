const   express = require('express'),
        dotenv = require('dotenv').config(),
        bcrypt = require('bcrypt'),
        db = require('./db/interface.js'),
        api = require('./api/interface.js')

const app = express()
const {PORT} = process.env

// fight somebody


// rankings
app.use('*', (req, res, next) => {
    console.log('INCOMING', req.originalUrl)
    res.setHeader('Access-Control-Allow-Origin', "*")
    next()
})
app.use('/api', api)
app.get('/', (req, res, next) => {
    res.send('Hey!')
})


app.listen(PORT, () => console.log(`Awaiting Vunder on port ${PORT}`))