import React from 'react'
import Button from '../Button'

const ButtonGroup = ({ buttons, onClick, onMouseEnter, onMouseLeave }) => {
  const renderButtons = () => buttons.map(renderButton)

  const renderButton = (button) => {
    return <Button
      key={ button.index }
      onClick={ () => onClick(button.gameMode) }
      onMouseEnter={ () => onMouseEnter(button.index) }
      onMouseLeave={ () => onMouseLeave(button.index) }
      name={ button.name }
    />
  }

  return (
    <div className="button-group">
      { renderButtons() }
      <style jsx>{`
        .button-group {
          box-sizing: border-box;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          padding: 16px 50px;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default ButtonGroup
