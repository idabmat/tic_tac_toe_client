import React, { useEffect, useState } from 'react'
import App from '../components/App'
import { Socket } from 'phoenix'

const HomePage = () => {
  const [gameChannel, setGameChannel] = useState()
  const [game, setGame] = useState({
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    gameMode: null,
    winner: undefined
  })

  useEffect(() => {
    let socket = new Socket('ws://localhost:4000/socket')
    socket.connect()
    let channel = socket.channel('game:new', {})
    channel.join()
    setGameChannel(channel)
    channel.on('game_state', updateGame)
    return () => {
      channel.leave()
    }
  }, [])

  const newGame = (mode) => {
    gameChannel.push('new_game', mode)
  }

  const computerMove = () => {
    gameChannel.push('computer_move', {})
  }

  const playerMove = (position) => {
    gameChannel.push('player_move', position)
  }

  const updateGame = (newGameState) => {
    setGame(newGameState)
    if (newGameState.current_player === 'computer') {
      computerMove()
    }
  }

  return <App
    board={game.board}
    winner={game.winner}
    gameMode={game.gameMode}
    onCellClicked={playerMove}
    newGame={newGame}
  />
}

export default HomePage
