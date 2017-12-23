import React from 'react'
import { func, number, string } from 'prop-types'

const NOOP = (e) => e

export default class Button extends React.Component {
  static propTypes = {
    gameMode: string,
    handleClick: func,
    handleMouseEnter: func,
    handleMouseLeave: func,
    index: number,
    name: string,
  }

  static defaultProps = {
    handleClick: NOOP,
    handleMouseEnter: NOOP,
    handleMouseLeave: NOOP,
  }

  handleClick() {
    const gameMode = this.props.gameMode
    this.props.handleClick(gameMode)
  }

  handleMouseEnter() {
    const index = this.props.index
    this.props.handleMouseEnter(index)
  }

  handleMouseLeave() {
    const index = this.props.index
    this.props.handleMouseLeave(index)
  }

  render() {
    return(
      <a className="btn" onClick={ this.handleClick.bind(this) } onMouseEnter={ this.handleMouseEnter.bind(this) } onMouseLeave={ this.handleMouseLeave.bind(this) }>
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
