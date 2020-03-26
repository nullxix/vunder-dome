import styled from 'styled-components'
const   React = require('react'),
        global = require('../../themes/globalColors.js')


const Nombre = styled.div`
    color: ${global.black};
    text-align: center;
    margin: auto;
`

export default props => {
    return (
        <Nombre>{props.children}</Nombre>
    )
}