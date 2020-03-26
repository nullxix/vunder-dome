import React from 'react'
import styled from 'styled-components'
import v from './v.png'

const Title = styled.div`
    font-size: 72px;
    text-align: center;
    font-family: sans-serif;
`

const V = styled.img`
    display: inline-block;
    height: 1.6em;
    width: 1.6em;
    transform: translate(0.3em,0.5em)
`
export default props => {

    return (
        <Title>
            Welcome to the<V src={v}/>underdome
        </Title>
    )
}