import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 100px;
`

export default props => {

    return (
        <Container>
            {props.children}
        </Container>

    )
}