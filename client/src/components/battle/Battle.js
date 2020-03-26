import React, {useRef, useEffect, useState} from 'react'
import BattleContainer from './BattleContainer'
import BattleCard from './BattleCard'
import Champion from '../champion/Champion'
import Vs from '../vs/Vs'
import BattleAnimation from './BattleAnimation'
import Winner from './BattleWinner'
export default props => {
    const [battleOver, setBattleOver] = useState(false)
    const {battleResults} = props
    const fightPlayer = useRef()

    useEffect(() => {
        setBattleOver(false)
        setTimeout(()=> {
            setBattleOver(true)
        }, 500*5) //5 beats
    }, [battleResults])

    const displayBattle = () => {
        return (
            <>
                <BattleContainer>
                    <BattleCard>
                        <Champion>{battleResults.home}</Champion>
                        <BattleAnimation battle={battleResults} fighter={'home'}/> 
                    </BattleCard>
                    <Vs/>
                    <BattleCard>
                        <Champion>{battleResults.away}</Champion>
                        <BattleAnimation battle={battleResults} fighter={'away'}/>
                    </BattleCard>
                </BattleContainer>
                {battleOver && <Winner winner={battleResults[battleResults.winner]}/>}
            </>
        )
    }
    return (
        <div>
            {battleResults ? displayBattle() : '...fighting!'}
        </div>
    )
}

