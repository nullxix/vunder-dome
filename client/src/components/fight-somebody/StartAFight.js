import React from 'react'
import styled from 'styled-components'
import global from '../../themes/globalColors.js'

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    color: ${global.black};
    background: ${global.white};
    border: 4px solid ${global.black};
    font-size: 48px;
    padding: 30px;

    &:after {
        content: " 🦄";
      }
      
    &:hover {
        color: ${global.white};
        background: ${global.black};
    }

    &:focus {
        outline: ${global.black};
    }

    &:active {
        outline: 4px solid ${global.red};
        color: ${global.white};
        border-color: ${global.red};
        background: ${global.red};
    }
`

export default props => {

    const handleClick = event => {
        props.startFight()
    }
    return (
        <Container>
            <Button onClick={handleClick}>I WANNA START A FIGHT!</Button>
        </Container>
    )
}