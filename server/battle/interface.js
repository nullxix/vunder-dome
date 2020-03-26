const db = require('../db/interface.js')

const names = ['David', 'Bob', 'Bethany', 'Mr Mr', 'Anonymous Persian Prince', 'Bob Jr', 'Goliath']

const genDice = () => {
    const oneDice = () => Math.floor(1 + (Math.random() * 6))
    return [oneDice(), oneDice(), oneDice()]
}

const genDummyBattleResponse = () => {
    let homeAttack = genDice()
    let awayAttack = genDice()
    let winner = 'home'
    if(homeAttack.reduce((ac, cv) => ac + cv) < awayAttack.reduce((ac, cv) => ac + cv))
        winner = 'away'

    return {
        away: names[Math.floor(Math.random() * names.length)],
        home: names[Math.floor(Math.random() * names.length)],
        homeAttack,
        awayAttack,
        winner
    }
}

const randomBattle = async () => {
    let home = await db.getRandomChampion()
    let away = await db.getRandomChampion()
    home.success && (home = home.champion)
    away.success && (away = away.champion)
    let homeAttack = genDice()
    let awayAttack = genDice()
    let homeTotal = homeAttack.reduce((ac, cv) => ac + cv)
    let awayTotal = awayAttack.reduce((ac, cv) => ac + cv)
    if( homeTotal < awayTotal ){
        winner = 'away'
        db.adjustRank(away.name, awayTotal - homeTotal)
        db.adjustRank(home.name, homeTotal - awayTotal)
    } else {
        winner = 'home'
        db.adjustRank(home.name, homeTotal - awayTotal)
        db.adjustRank(away.name, awayTotal - homeTotal)
    }

   
    return {
        away: away.name,
        home: home.name,
        homeAttack,
        awayAttack,
        winner
    }
}

module.exports = {
    genDummyBattleResponse,
    randomBattle
}