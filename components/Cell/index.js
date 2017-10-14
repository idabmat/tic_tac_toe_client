import React from 'react'
import { func, number, string } from 'prop-types'

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

  render() {
    return (
      <td style={{width: '30vh', height: '30vh', border: '1px solid black', textAlign: 'center', fontSize: '20vh'}} onClick={() => this.handleClick()}>
        { this.renderContent() }
      </td>
    )
  }
}
