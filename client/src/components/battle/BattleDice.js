import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import _0 from './dice/0.png'
import _1 from './dice/1.png'
import _2 from './dice/2.png'
import _3 from './dice/3.png'
import _4 from './dice/4.png'
import _5 from './dice/5.png'
import _6 from './dice/6.png'

const DiceBox = styled.div`
    color: black;
`
const DieImg = styled.img`
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 2px solid black;
    margin: 5px;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: pixelated;   
`

const Die = props => {
    switch(props.number) {
        case 1:
            return <DieImg src={_1}/>
        case 2:
            return <DieImg src={_2}/>
        case 3:
            return <DieImg src={_3}/>
        case 4:
            return <DieImg src={_4}/>
        case 5:
            return <DieImg src={_5}/>
        case 6:
            return <DieImg src={_6}/>
        default:
            return <DieImg src={_0}/>
    }
}
export default props => {
    const {numbers, beat} = props
    const [renderedNumbers, setRenderedNumbers] = useState([])
    let numRendered = 0;

    useEffect(()=>{
        //wipe the screen
        setRenderedNumbers([])
        //delay one beat before playing
       setTimeout(() => {
            animateNumbers()
       }, beat)
    }, [numbers])

    const animateNumbers = () => {
        const rhythm = setInterval(() => {
            console.log(props.beat, numbers, renderedNumbers)
            const newNumbers = []
            for(let i = 0; i < numRendered + 1; i++){
                newNumbers.push(numbers[i])
            }
            setRenderedNumbers(newNumbers)
            numRendered++
            if(numRendered >= numbers.length )
                clearInterval(rhythm)
        }, beat)
    }
    return (
        <DiceBox>
            {renderedNumbers.map((number, i) => <Die key={'d' + i} number={number}/>)}
        </DiceBox>
    )
}