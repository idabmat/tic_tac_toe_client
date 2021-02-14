import React from 'react'
import classnames from 'classnames'

const Cell = ({ player, gameMode, position, onClick }) => {
  const renderContent = () => {
    if (player && gameMode === 'notakto') return 'X'
    if (player === 'player1') return 'X'
    if (player === 'computer') return 'O'
    return ''
  }

  const handleClick = () => {
    onClick(position)
  }

  const styles = () => {
    return classnames({
      cell: true,
      clicked: player,
      computer: player === 'computer',
      player: player === 'player1'
    })
  }

  return (
    <div className={styles()} onClick={handleClick}>
      { renderContent() }
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

export default Cell
