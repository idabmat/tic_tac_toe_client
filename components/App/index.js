import React, { useState } from 'react'
import Grid from '../Grid'
import Overlay from '../Overlay'

const App = ({ channel }) => {
  const [game, setGame] = useState({
    board:[
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    gameMode: null
  })


  const startGame = (mode) => {
    channel.push('new_game', mode)
    channel.on('game_state', updateGame)
    channel.push('get_state', {})
  }

  const newGame = (mode) => {
    channel.push('new_game', mode)
  }

  const updateGame = (newGameState) => {
    setGame(newGameState)
    if (newGameState.current_player === 'computer') {
      computerMove()
    }
  }

  const computerMove = () => {
    channel.push('computer_move', {})
  }

  const handleCellClicked = (position) => {
    channel.push('player_move', position)
  }

  const renderOverlay = () => {
    const winner = game.winner
    if (typeof winner === 'undefined') return <Overlay onClick={startGame} />
    if (winner) return <Overlay onClick={newGame} winner={winner} />
  }

  return (
    <div className="appContainer">
      {renderOverlay()}
      <Grid board={game.board} cellClicked={handleCellClicked} gameMode={game.game_mode} />
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
