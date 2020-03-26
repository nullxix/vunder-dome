import React from 'react'
import styled from 'styled-components'
import Champion from '../champion/Champion'

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Shrinker = styled.div`
    scale: 50%;
`
const RankNumber = styled.div`
    font-size: 22px;
`



export default props => {

    return (
        <Container>
            <Shrinker><Champion>{props.name}</Champion></Shrinker>
            <RankNumber>{Math.floor(props.rank)}</RankNumber>
        </Container>
    )
}