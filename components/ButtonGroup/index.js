import React from 'react'
import { arrayOf, func, number, shape, string } from 'prop-types'
import Button from '../Button'

const NOOP = (e) => e

export default class ButtonGroup extends React.Component {
  static propTypes = {
    buttons: arrayOf(
      shape({
        gameMode: string,
        index: number,
        name: string,
      })
    ),
    handleClick: func,
    handleMouseEnter: func,
    handleMouseLeave: func,
  }

  static defaultProps = {
    handleClick: NOOP,
    handleMouseEnter: NOOP,
    handleMouseLeave: NOOP,
  }

  renderButtons() {
    return this.props.buttons.map(
      (button) => this.renderButton(button)
    )
  }

  renderButton(button) {
    return <Button
      key={ button.index }
      gameMode={ button.gameMode }
      handleClick={ this.props.handleClick.bind(this) }
      handleMouseEnter={ this.props.handleMouseEnter.bind(this) }
      handleMouseLeave={ this.props.handleMouseLeave.bind(this) }
      name={ button.name }
      index={ button.index }
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
