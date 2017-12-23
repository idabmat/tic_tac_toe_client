import React from 'react'
import { func, string } from 'prop-types'
import ButtonGroup from '../ButtonGroup'

const NOOP = (e) => e

export default class Overlay extends React.Component {
  static propTypes = {
    handleClick: func,
    winner: string,
  }

  static defaultProps = {
    handleClick: NOOP
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      buttons: [
        {
          handleClick: this.handleClick.bind(this),
          gameMode: 'original',
          name: 'Original Game'
        }, {
          handleClick: this.handleClick.bind(this),
          gameMode: 'notakto',
          name: 'Notakto Game'
        }, {
          handleClick: this.handleClick.bind(this),
          gameMode: 'misere',
          name: 'Misere Game'
        }
      ]
    }
  }

  handleClick(gameMode) {
    this.props.handleClick(gameMode)
  }

  renderWinner() {
    if (this.props.winner === 'draw') {
      return <p>It's a tie.</p>
    } else if (this.props.winner === 'computer') {
      return <p>You lost.</p>
    } else if (this.props.winner === 'player1') {
      return <p>You won!</p>
    }
  }

  render() {
    return(
      <div className="overlay">
        <h1>Tic Tac Toe</h1>
        {this.renderWinner()}
        <ButtonGroup buttons={ this.state.buttons } />
        <style jsx>{`
          .overlay {
            position: fixed;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(255,255,255, 0.8);
            text-align: center;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
          }
          @media only screen and (min-width: 768px) {
            .overlay {
              top: 40px;
              width: 700px;
              height: 700px;
            }
          }
        `}</style>
      </div>
    )
  }
}
