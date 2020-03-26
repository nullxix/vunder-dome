import React, {useState, useEffect} from 'react'
const   {randIcon} = require('./icons/index.js'),
        ChampionName = require('./ChampionName'),
        ChampionContainer = require('./ChampionContainer')


export default props => {
    const [Icon, setIcon] = useState()

    //intialization
    useEffect(() => {
        setIcon(randIcon())
    },[])


    return (
        <ChampionContainer>
            <Icon></Icon>
            <ChampionName>{props.name || 'a lowly minion'}</ChampionName>
        </ChampionContainer>
    )
}