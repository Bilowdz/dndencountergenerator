import React, { createContext, useContext, useState } from 'react'
import './App.css'
import Playermenu, { UserContext } from './MUIcomponents/dropmenu'
import Levelmenu from './MUIcomponents/levelmenu'
import Sizemenu from './MUIcomponents/size'
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
        <Sizemenu />
        {/* <UserContext.Consumer>
          {(user) => {
            return <div>User context value {user}</div>
          }}
        </UserContext.Consumer> */}
      </div>
      <p>easy: xp</p>
      <p>medium: 200 xp</p>
      <p>hard: 400 xp</p>
      <p>deadly: 1000 xp</p>
      {/* type, CR min/max, alignment, environment, legendary, sources. Just make buttons for now */}
    </div>
  )
}

export default App
