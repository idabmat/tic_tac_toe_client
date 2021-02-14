import React from 'react'
import Cell from '../Cell'

const Grid = ({ board, gameMode, cellClicked }) => {
  const renderRows = () => {
    return board.map((row, rowIndex) => renderCells(row, rowIndex))
  }

  const renderCells = (row, rowIndex)  => {
    return row.map((cell, columnIndex) => {
      const position = positionFromIndexes(rowIndex, columnIndex)
      return (
        <Cell
          key={ position }
          player={ cell }
          position={ position }
          onClick={ cellClicked }
          gameMode={ gameMode }
        />
      )
    })
  }

  const positionFromIndexes = (rowIndex, columnIndex) => {
    return rowIndex * size() + columnIndex + 1
  }

  const size = () => board.length

  return (
    <div className="grid">
      { renderRows() }
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
export default Grid
