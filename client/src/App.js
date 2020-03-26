import React from 'react';
import Champion from './components/champion/Champion.js'
import Vs from './components/vs/Vs'
import BattleContainer from './components/battle/BattleContainer.js'


function App() {
  return (
    <div>
      <BattleContainer>
        <Champion>David</Champion>
        <Vs/>
        <Champion>Goliath</Champion>
      </BattleContainer>
    </div>
  )
}

export default App;
