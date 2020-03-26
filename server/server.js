const   express = require('express'),
        mongoose = require('mongoose'),
        dotenv = require('dotenv').config(),
        bcrypt = require('bcrypt')

const app = express()
const {PORT} = process.env



app.listen(PORT, () => console.log(`Awaiting Vunder on port ${PORT}`))