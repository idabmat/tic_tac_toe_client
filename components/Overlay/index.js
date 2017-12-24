import React from 'react'
import { func, string } from 'prop-types'
import { find } from 'lodash'
import ButtonGroup from '../ButtonGroup'
import GameDescription from '../GameDescription'

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
          active: false,
          description: 'You play as X, computer plays as O. First one to mark 3 cells in a row, column, or diagonal wins.',
          gameMode: 'original',
          index: 0,
          name: 'Original Game'
        }, {
          active: false,
          description: 'You and computer both play as X. First one to mark 3 cells in a row, column, or diagonal wins.',
          gameMode: 'notakto',
          index: 1,
          name: 'Notakto Game'
        }, {
          active: false,
          description: 'You play as X, computer plays as O. First one to mark 3 cells in a row, column, or diagonal loses.',
          gameMode: 'misere',
          index: 2,
          name: 'Misere Game'
        }
      ]
    }
  }

  handleClick(gameMode) {
    this.props.handleClick(gameMode)
  }

  handleMouseEnter(index) {
    const newButtons = this.state.buttons.map((button) => {
      if (button.index != index) {
        return button
      }
      return {...button, active: true}
    })
    this.setState({ buttons: newButtons })
  }

  handleMouseLeave(index) {
    const newButtons = this.state.buttons.map((button) => {
      if (button.index != index) {
        return button
      }
      return {...button, active: false}
    })
    this.setState({ buttons: newButtons })
  }

  activeButton() {
    return find(this.state.buttons, (button) => {
      return button.active
    })
  }

  activeDescription() {
    const activeButton = this.activeButton()
    if (activeButton) {
      return activeButton.description
    }
  }

  renderWinner() {
    if (this.props.winner === 'draw') {
      return <p>{ 'It\'s a tie.' }</p>
    } else if (this.props.winner === 'computer') {
      return <p>{ 'You lost.' }</p>
    } else if (this.props.winner === 'player1') {
      return <p>{ 'You won!' }</p>
    }
  }

  renderDescription() {
    const description = this.activeDescription()
    if (description) {
      return <GameDescription description={ description } />
    }
  }

  render() {
    return(
      <div className="overlay">
        <h1>Tic Tac Toe</h1>
        { this.renderWinner() }
        <ButtonGroup buttons={ this.state.buttons } handleClick={ this.handleClick.bind(this) } handleMouseEnter={ this.handleMouseEnter.bind(this) } handleMouseLeave={ this.handleMouseLeave.bind(this) } />
        { this.renderDescription() }
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
