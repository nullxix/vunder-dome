import React, {useState} from 'react';
import Battle from './components/battle/Battle.js'
import StartAFight from './components/fight-somebody/StartAFight.js'
import Rankings from './components/rankings/Rankings'
import Header from './components/header/Header'
import globalVars from './utils/globalVars'
import fightMP3 from './audio/fight.mp3'



function App() {
  const [battleResults, setBattleResults] = useState(false)
  const [battling, setBattling] = useState(false)


  const fightAudio = new Audio(fightMP3)

  const handleFight = event => {
    if(true){
      fetch(`${globalVars.hostURL}/api/battle`,
      {
        method: 'GET'
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
          if(data.success){
            console.log('FIGHTING')
            console.log(data.battle)
            setBattling(true)
            setBattleResults(data.battle)
            
            //FGIHT!
            setTimeout(()=>fightAudio.play(), 250) //half of beat
          }
      })
    }
    
  }
  return (
    <div>
      <Header/>
      {battling && <Battle battleResults={battleResults}/>}
      <StartAFight startFight={handleFight}/>
      <Rankings/>
    </div>
  )
}

export default App;
