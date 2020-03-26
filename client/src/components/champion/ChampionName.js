import styled from 'styled-components'
const   React = require('react'),
        global = require('../../themes/globalColors.js')


const Nombre = styled.div`
    color: black;
    text-align: center;
    border: 1px solid ${global.black};
    margin: auto;
    width: 90%;
`

export default props => {
    return (
        <Nombre>{props.children}</Nombre>
    )

}