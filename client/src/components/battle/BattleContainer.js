import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export default props => {

    return (
        <Container>
            {props.children}
        </Container>

    )
}