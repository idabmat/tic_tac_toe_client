import React from 'react'
import { array, func, string } from 'prop-types'
import Cell from '../Cell'

export default class Grid extends React.Component {

  static propTypes = {
    board: array,
    cellClicked: func,
    gameMode: string
  }

  renderRows() {
    return this.props.board.map((row, rowIndex) => this.renderCells(row, rowIndex))
  }

  renderCells(row, rowIndex) {
    return row.map((cell, columnIndex) => {
      const position = this.positionFromIndexes(rowIndex, columnIndex)
      return (
        <Cell
          key={ position }
          player={ cell }
          position={ position }
          handleClick={ this.cellClicked.bind(this) }
          gameMode={ this.props.gameMode }
        />
      )
    })
  }

  cellClicked(position) {
    this.props.cellClicked(position)
  }

  positionFromIndexes(rowIndex, columnIndex) {
    return rowIndex * this.size() + columnIndex + 1
  }

  size() {
    return this.props.board.length
  }

  render() {
    return (
      <div className="grid">
        { this.renderRows() }
        <style jsx>{`
          .grid {
            height: 300px;
            width: 300px;
            display: grid;
            grid: repeat(3, 1fr) / repeat(3, 1fr);
            grid-gap: 10px;
            margin: 34px auto;
          }
          @media only screen and (min-width: 768px) {
            .grid {
              margin: 16px auto;
              height: 600px;
              width: 600px;
            }
          }
        `}</style>
      </div>
    )
  }
}
