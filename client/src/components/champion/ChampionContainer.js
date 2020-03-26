import styled from 'styled-components'
import React from 'react'
const globalColors = require('../../themes/globalColors.js')


const Container = styled.div`
    color: ${globalColors.black};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around:
    padding: 20px;
    max-width: 40%;
`

export default props => {
    return (
        <Container>{props.children}</Container>
    )
}