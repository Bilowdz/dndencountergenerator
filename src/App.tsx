import React from 'react'
import './App.css'
import Playermenu from './MUIcomponents/dropmenu'
import Levelmenu from './MUIcomponents/levelmenu'
import Topmenubar from './MUIcomponents/topbarmenu'

function App() {
  return (
    <div>
      <div className='App'>
        <Topmenubar />
      </div>
      <div className='left'>
        <Playermenu />
        <Levelmenu />
      </div>
      <p>easy: 100 xp</p>
      <p>medium: 200 xp</p>
      <p>hard: 400 xp</p>
      <p>deadly: 1000 xp</p>
    </div>
  )
}

export default App
