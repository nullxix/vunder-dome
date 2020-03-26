import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Button = styled.button`
    font-size: 18px;
    text-align: center;
    background: white;
    border: 2px solid black;
    box-shadow: 2px 2px 2px black;

    &:active {
        outline: none;
        box-shadow: none;
    }

    &:focus {
        background: lightgrey;
        outline: none;
    }
`


export default props => {

    return (
        <Container>
            <Button onClick={props.onClick}>reload standings</Button>
        </Container>
    )
}