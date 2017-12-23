import React from 'react'
import { arrayOf, func, shape, string } from 'prop-types'
import Button from '../Button'

export default class ButtonGroup extends React.Component {
  static propTypes = {
    buttons: arrayOf(
      shape({
        handleClick: func,
        gameMode: string,
        name: string,
      })
    )
  }

  renderButtons() {
    return this.props.buttons.map(
      (button) => this.renderButton(button)
    )
  }

  renderButton(button) {
    return <Button
      key={ button.index }
      handleClick={ button.handleClick }
      gameMode={ button.gameMode }
      name={ button.name }
    />
  }

  render() {
    return (
      <div className="button-group">
        { this.renderButtons() }
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
}
