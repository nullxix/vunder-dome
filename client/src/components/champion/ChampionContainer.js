const   React = require('react'),
        globalColors = require('../../themes/globalColors.js')
import styled from 'styled-components'

const Container = styled.div`
    color: ${globalColors.black};
    text-align: center;
    border: 1px solid ${globalColors.black};
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around:
`

export default props => {
    return (
        <Container>{props.children}</Container>
    )

}