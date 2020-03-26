import React from 'react'
import styled from 'styled-components'


const PreTitle = styled.div`
    font-size: 24px;
    text-align: center;
`

const Title = styled.div`
    font-size: 46px;
    text-align: center;
`

export default props => {

    return (
        <>
            <PreTitle>the winner is</PreTitle>
            <Title>{props.winner}</Title>
        </>
    )
}