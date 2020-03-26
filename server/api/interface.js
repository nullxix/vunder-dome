const express = require('express')
const router = express.Router()
const battleManager = require('../battle/interface.js')
const db = require('../db/interface.js')

router.use(express.json())

router.use('*', (req, res, next) => {
    next()
})

router.get('/rankings', (req, res, next) => {
    const output = {
        success: true,
        rankings: db.getStandings()
    }
    res.send(JSON.stringify(output))
})

router.use('/battle', (req, res, next) => {
    battleManager.randomBattle()
    .then(battleResult => {
        console.log(battleResult)
        const output = {
            success: true,
            battle: battleResult
        }
        res.send(JSON.stringify(output))
    })
    
})

module.exports = router