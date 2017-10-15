import React from 'react'
import { Socket } from 'phoenix'
import Grid from '../Grid'

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
    }
  }

  componentDidMount() {
    this.socket = new Socket('ws://localhost:4000/socket')
    this.socket.connect()
    this.channel = this.socket.channel('game:new', {})
  }

  startGame() {
    this.channel.join()
    this.channel.on('game_state', (gameState) => this.updateState(gameState))
    this.channel.push('get_state')
  }

  newGame() {
    this.channel.push('new_game')
  }

  updateState(gameState) {
    this.setState(gameState)
    if (gameState.current_player === 'computer') {
      this.computerMove()
    }
  }

  computerMove() {
    this.channel.push('computer_move')
  }

  handleCellClicked(position) {
    this.channel.push('player_move', position)
  }

  render() {
    return(
      <div>
        <button onClick={this.startGame.bind(this)}>Start</button>
        <button onClick={this.newGame.bind(this)}>New game</button>
        <Grid board={ this.state.board } cellClicked={ this.handleCellClicked.bind(this) }/>
      </div>
    )
  }
}
