import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Playermenu from './MUIcomponents/dropmenu'
import Levelmenu from './MUIcomponents/levelmenu'
import Sizemenu from './MUIcomponents/size'
import Topmenubar from './MUIcomponents/topbarmenu'

import { playerContext } from './MUIcomponents/dropmenu'
import { levelContext } from './MUIcomponents/levelmenu'

function App() {
  const playerCount = useContext(playerContext)
  const levelCount = useContext(levelContext)
  const [easyxp, setEasyxp] = useState(25)
  const [mediumxp, setMediumxp] = useState(50)
  const [hardxp, setHardxp] = useState(75)
  const [deadlyxp, setDeadlyxp] = useState(100)
  useEffect(() => {
    setEasyxp(levelCount * playerCount * 25)
    setMediumxp(levelCount * playerCount * 50)
    setHardxp(levelCount * playerCount * 75)
    setDeadlyxp(levelCount * playerCount * 100)
  }, [playerCount, levelCount])
  return (
    <div>
      <div className='App'>
        <Topmenubar />
      </div>
      <div className='left'>
        <Playermenu />
        <Levelmenu />
        <Sizemenu />
      </div>
      <p>easy: {easyxp} xp</p>
      <p>medium: {mediumxp} xp</p>
      <p>hard: {hardxp} xp</p>
      <p>deadly: {deadlyxp} xp</p>
      <p>------------------</p>
      <p>playerCount: {playerCount}</p>
      <p>levelCount: {levelCount}</p>
      {/* type, CR min/max, alignment, environment, legendary, sources. Just make buttons for now */}
    </div>
  )
}

export default App
