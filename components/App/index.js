import React from 'react'
import { Socket } from 'phoenix'
import Grid from '../Grid'
import Overlay from '../Overlay'

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

  renderOverlay() {
    const winner = this.state.winner
    if (typeof winner === "undefined") {
      return <Overlay handleClick={this.startGame.bind(this)} />
    } else if (winner) {
      return <Overlay handleClick={this.newGame.bind(this)} winner={winner}/>
    }
  }

  render() {
    return(
      <div className="appContainer">
        {this.renderOverlay()}
        <Grid board={ this.state.board } cellClicked={ this.handleCellClicked.bind(this) }/>
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
}
