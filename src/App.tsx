import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Playermenu from './MUIcomponents/dropmenu';
import Levelmenu from './MUIcomponents/levelmenu';
import Sizemenu from './MUIcomponents/size';
import Topmenubar from './MUIcomponents/topbarmenu';

import { playerContext } from './contexts/playerContext';
import { levelContext } from './contexts/levelContext';

function App() {
  const [pContext, setPContext] = useState(1);
  const [lContext, setLContext] = useState(1);

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
        <div className="App">
          <Topmenubar />
        </div>
        <div className="left">
          <playerContext.Provider value={[pContext, setPContext]}>
            <Playermenu />
          </playerContext.Provider>
          <p>{pContext}</p>
          <levelContext.Provider value={[lContext, setLContext]}>
            <Levelmenu />
          </levelContext.Provider>
          <p>{lContext}</p>
          <Sizemenu />
        </div>
        <p>easy: {easyxp} xp</p>
        <p>medium: {mediumxp} xp</p>
        <p>hard: {hardxp} xp</p>
        <p>deadly: {deadlyxp} xp</p>
        {/* <p>levelCount: {levelCount}</p> */}
        {/* type, CR min/max, alignment, environment, legendary, sources. Just make buttons for now */}
      </div>
    </>
  );
}

export default App;
