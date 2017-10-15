import React from 'react'
import { array, func } from 'prop-types'
import Cell from '../Cell'

export default class Grid extends React.Component {

  static propTypes = {
    board: array,
    cellClicked: func,
  }

  renderRows() {
    return this.props.board.map((row, rowIndex) => {
      return(
        <tr key={rowIndex}>
          {this.renderCells(row, rowIndex)}
        </tr>
      )
    })
  }

  renderCells(row, rowIndex) {
    return row.map((cell, columnIndex) => {
      const position = this.positionFromIndexes(rowIndex, columnIndex)
      return (
        <Cell
          key={ columnIndex }
          player={ cell }
          position={ position }
          handleClick={ this.cellClicked.bind(this) }
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
      <table className="grid">
        <tbody>
          { this.renderRows() }
        </tbody>
        <style jsx>{`
          .grid {
            margin: 0 auto;
            border-collapse: collapse;
          }
        `}</style>
      </table>
    )
  }
}
