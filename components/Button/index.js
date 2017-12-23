import React from 'react'
import { func, string } from 'prop-types'

export default class Button extends React.Component {
  static propTypes = {
    name: string,
    gameMode: string,
    handleClick: func,
  }

  handleClick() {
    const gameMode = this.props.gameMode
    this.props.handleClick(gameMode)
  }

  render() {
    return(
      <a className="btn" onClick={ this.handleClick.bind(this) }>
        {this.props.name}
        <style jsx>{`
          .btn {
            background-color: #546e7a;
            color: #fff;
            cursor: pointer;
            padding: 20px;
            text-align: center;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
          }
          .btn:hover {
            background-color: #29434e;
          }
        `}</style>
      </a>
    )
  }
}
