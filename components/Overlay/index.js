import React, { useState } from 'react'
import ButtonGroup from '../ButtonGroup'
import GameDescription from '../GameDescription'

const Overlay = ({ onClick, winner }) => {
  const [buttons, setButtons] = useState([
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
  ])

  const handleMouseEnter = (index)  => {
    const newButtons = buttons.map((button) => {
      if (button.index != index) {
        return button
      }
      return {...button, active: true}
    })
    setButtons(newButtons)
  }

  const handleMouseLeave = (index) => {
    const newButtons = buttons.map((button) => {
      if (button.index != index) {
        return button
      }
      return {...button, active: false}
    })
    setButtons(newButtons)
  }

  const activeButton = () => buttons.find((button) => button.active)

  const activeDescription = () => {
    const button = activeButton()
    if (button) return button.description
  }

  const renderWinner = () => {
    if (winner === 'draw') return <p>It's a tie.</p>
    if (winner === 'computer') return <p>You lost.</p>
    if (winner === 'player1') return <p>You won!</p>
  }

  const renderDescription = () => {
    const description = activeDescription()
    if (description) return <GameDescription description={ description } />
  }

  return(
    <div className="overlay">
      <h1>Tic Tac Toe</h1>
      { renderWinner() }
      <ButtonGroup buttons={ buttons } onClick={ onClick } onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } />
      { renderDescription() }
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

export default Overlay
