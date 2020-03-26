import React, {useState} from 'react'
import styled from 'styled-components'
import BattleDice from './BattleDice'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export default props => {
    const {battle} = props
    const beat = 500 //used to synchronize animations
    return (
        <Container>
            <BattleDice beat={beat} numbers = {props.fighter == 'home' ? battle.homeAttack : battle.awayAttack}/>
        </Container>

    )
}