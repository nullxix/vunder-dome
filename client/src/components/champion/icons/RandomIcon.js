import React from 'react'
import styled from 'styled-components'
import I_0 from './0.png'
import I_1 from './1.png'
import I_2 from './2.png'
import I_3 from './3.png'
import I_4 from './4.png'
import I_5 from './5.png'
import I_6 from './6.png'
import I_7 from './7.png'
import I_8 from './8.png'

const icons = [I_0, I_1, I_2, I_3, I_4, I_5, I_6, I_7, I_8]
const Img = styled.img`
    padding: 10px;
    width: 100px;
    height: 100px;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: pixelated;     
`

export default props => {
    let which = Math.floor(Math.random() * icons.length)
    return (
        <Img src={icons[which]}/>
    )
}

