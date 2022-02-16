import React from 'react'
import './App.css'
import Playermenu from './MUIcomponents/dropmenu'
import Levelmenu from './MUIcomponents/levelmenu'
import Topmenubar from './MUIcomponents/topbarmenu'

function App() {
  return (
    <div className='App'>
      <Topmenubar />
      <Playermenu />
      <Levelmenu />
    </div>
  )
}

export default App
