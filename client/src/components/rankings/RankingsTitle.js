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

const Title = styled.div`
    font-size: 32px;
    text-align: center;
`


export default props => {

    return (
        <Container>
            <Title>STANDINGS</Title>
            <hr style={{width: '100%'}}/>
        </Container>
    )
}