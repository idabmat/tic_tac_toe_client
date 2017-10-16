import React from 'react'
import { func, string } from 'prop-types'
import Button from '../Button'

const NOOP = (e) => e

export default class Overlay extends React.Component {
  static propTypes = {
    handleClick: func,
    winner: string,
  }

  static defaultProps = {
    handleClick: NOOP
  }

  handleClick() {
    this.props.handleClick()
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
        <Button
          handleClick={this.handleClick.bind(this)}
          name="Start game"
        />
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
