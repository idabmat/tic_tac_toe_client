import React from 'react'
import { func, number, string } from 'prop-types'
import classnames from 'classnames'

export default class Cell extends React.Component {
  static propTypes = {
    player: string,
    handleClick: func,
    position: number,
  }

  renderContent() {
    const player = this.props.player
    if (player === 'player1') {
      return 'X'
    } else if (player === 'computer') {
      return 'O'
    }
    return ''
  }

  handleClick() {
    const position = this.props.position
    this.props.handleClick(position)
  }

  styles() {
    return classnames({
      cell: true,
      clicked: this.props.player,
      computer: this.props.player === 'computer',
      player: this.props.player === 'player1'
    })
  }

  render() {
    return (
      <div className={this.styles()} onClick={() => this.handleClick()}>
        { this.renderContent() }
        <style jsx>{`
          .cell {
            border-radius: 2px;
            color: #000;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24);
            background-color: #e0e1e0;
            padding: 0;
            text-align: center;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            font-size: 350%;
            font-family: 'Permanent Marker', cursive;
          }
          @media only screen and (min-width: 768px) {
            .cell {
              font-size: 800%;
            }
          }
          .cell:not(.clicked):hover {
            background-color: #d2d1d0;
            cursor: pointer;
          }
          .cell.clicked {
            color: #fff;
            box-shadow: none;

          }
          .cell.clicked.computer {
            background-color: #dd2c00;
          }
          .cell.clicked.player {
            background-color: #388e3c;
          }
        `}</style>
      </div>
    )
  }
}
