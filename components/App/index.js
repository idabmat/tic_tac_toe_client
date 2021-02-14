import React, { useState } from 'react'
import Grid from '../Grid'
import Overlay from '../Overlay'

const App = ({ board, gameMode, winner, onCellClicked, newGame }) => {
  const renderOverlay = () => {
    if (typeof winner === 'undefined') return <Overlay onClick={newGame} />
    if (winner) return <Overlay onClick={newGame} winner={winner} />
  }

  return (
    <div className="appContainer">
      {renderOverlay()}
      <Grid board={board} cellClicked={onCellClicked} gameMode={gameMode} />
      <style jsx>{`
        .appContainer {
          border-radius: 2px;
          background-color: #fff;
          width: 100vw;
          height: 100vh;
          margin: 0 auto;
          padding: 56px 0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        @media only screen and (min-width: 768px) {
          .appContainer {
            padding: 34px 0;
            margin: 40px auto 0;
            width: 700px;
            height: 700px;
          }
        }
      `}</style>
    </div>
  )
}

export default App
