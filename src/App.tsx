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
  const [pContext, setPContext] = useState(1);
  const [lContext, setLContext] = useState(1);
  const [sContext, setSContext] = useState('any');

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
          <sizeContext.Provider value={[sContext, setSContext]}>
            <Sizemenu />
          </sizeContext.Provider>
          <p>{sContext}</p>
        </div>
        <p>easy: {easyxp} xp</p>
        <p>medium: {mediumxp} xp</p>
        <p>hard: {hardxp} xp</p>
        <p>deadly: {deadlyxp} xp</p>
        <p>size: {sContext}</p>
        {/* <p>type: </p>
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
