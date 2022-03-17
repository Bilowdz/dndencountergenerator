import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Playermenu from './MUIcomponents/dropmenu';
import Levelmenu from './MUIcomponents/levelmenu';
import Sizemenu from './MUIcomponents/sizemenu';
import Topmenubar from './MUIcomponents/topbarmenu';

import { playerContext } from './contexts/playerContext';
import { levelContext } from './contexts/levelContext';
import { sizeContext } from './contexts/sizeContext';

function App() {
  // contexts for number of players, their levels, and size of monsters
  const [pContext, setPContext] = useState(1);
  const [lContext, setLContext] = useState(1);
  const [sContext, setSContext] = useState('any');

  // xp variables used to dynamically display each amount of xp
  // using useEffect below
  const [easyxp, setEasyxp] = useState(25);
  const [mediumxp, setMediumxp] = useState(50);
  const [hardxp, setHardxp] = useState(75);
  const [deadlyxp, setDeadlyxp] = useState(100);
  useEffect(() => {
    setEasyxp(lContext * pContext * 25);
    setMediumxp(lContext * pContext * 50);
    setHardxp(lContext * pContext * 75);
    setDeadlyxp(lContext * pContext * 100);
  }, [pContext, lContext]);
  return (
    <>
      <div>
        {/* display top bar component */}
        <div className="App">
          <Topmenubar />
        </div>
        {/* following div holds the drop down menus for generating an encounter */}
        <div className="left">
          {/* number of players menu */}
          <playerContext.Provider value={[pContext, setPContext]}>
            <Playermenu />
          </playerContext.Provider>
          <p>{pContext}</p>
          {/* average level of players menu */}
          <levelContext.Provider value={[lContext, setLContext]}>
            <Levelmenu />
          </levelContext.Provider>
          <p>{lContext}</p>
          {/* size of monsters menu */}
          <sizeContext.Provider value={[sContext, setSContext]}>
            <Sizemenu />
          </sizeContext.Provider>
          <p>{sContext}</p>
        </div>
        {/* display xp amount per difficulty */}
        <p>easy: {easyxp} xp</p>
        <p>medium: {mediumxp} xp</p>
        <p>hard: {hardxp} xp</p>
        <p>deadly: {deadlyxp} xp</p>
        <p>size: {sContext}</p>
        {/* 
        following p tags contain the future menus to further enhance the encounter generator
        <p>type: </p>
        <p>CR min: </p>
        <p>CR max: </p>
        <p>alignment: </p>
        <p>environment: </p>
        <p>legendary: </p>
        <p>sources: </p> */}
      </div>
    </>
  );
}

export default App;
