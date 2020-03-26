import React, {useState, useEffect} from 'react'
import ChampionName from './ChampionName'
import ChampionContainer from './ChampionContainer'

import RandomIcon from './icons/RandomIcon.js'


export default props => {


    return (
        <ChampionContainer>
            <RandomIcon></RandomIcon>
            <ChampionName>{props.children || 'a lowly minion'}</ChampionName>
        </ChampionContainer>
    )
}