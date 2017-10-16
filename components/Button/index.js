import React from 'react'
import { func, string } from 'prop-types'

export default class Button extends React.Component {
  static propTypes = {
    name: string,
    handleClick: func,
  }

  handleClick() {
    this.props.handleClick()
  }

  render() {
    return(
      <a className="btn" onClick={ this.handleClick.bind(this) }>
        {this.props.name}
        <style jsx>{`
          .btn {
            background-color: #546e7a;
            color: #fff;
            padding: 20px;
            cursor: pointer;
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
