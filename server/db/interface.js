mongoose = require('mongoose')


const names = ['Vunder School Computer', 'Bob', 'Magic School Bus', 'MoMo', 'Anonymous Persian Prince', 'Bob Jr','Jimmy','Nix','Laney','The Placenta','Sam','Nate','Marcus','Darius','Google Inc.', 'David', 'Goliath']
let lastRank = names.length * 10
const standings = names.map(name => {
    lastRank = lastRank - (Math.random()*20)
    return {
        name,
        rank: lastRank
    }
})

const champions = {}

const readyChampions = () => {
    standings.forEach(standing => {
        champions[standing.name] = {
            rank: standing.rank
        }
    })
}
readyChampions()

const getRandomChampion = () => {
    return new Promise((fulfill, reject) => {
        let name = names[Math.floor(Math.random() * names.length)]
        fulfill({success: true, champion: {name, ...champions[name]}})
    })
}

const getStandings = () => {
    let outStandings = Object.entries(champions)
    outStandings = outStandings.map(out => {
        let name = out[0]
        let rank = out[1].rank
        return {
            name,
            rank
        }
    })

    outStandings.sort((a, b) => {
        //a bigger NEGATIVE
        //equal ZERO
        //b bigger POSITIVE
        return (b.rank - a.rank)
    })
    outStandings.sort()
    return outStandings
}

const adjustRank = (name, amount) => {
    champions[name].rank = champions[name].rank + amount;
}

module.exports = {getStandings, getRandomChampion, adjustRank}
