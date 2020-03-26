const _0 = require('./0.png')
const _1 = require('./1.png')
const _2 = require('./2.png')
const _3 = require('./3.png')
const _4 = require('./4.png')
const _5 = require('./5.png')
const _6 = require('./6.png')
const _7 = require('./7.png')
const _8 = require('./8.png')

const icons = [_0, _1, _2, _3, _4, _5, _6, _7, _8]
const randomIcon = () => {
    let which = Math.floor(Math.random() * icons.length)
    return icons[which]
}

module.exports = {...icons, randomIcon}