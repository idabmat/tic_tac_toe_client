import React from 'react'
import { string } from 'prop-types'

export default class GameDescriptions extends React.Component {
  static propTypes = {
    description: string,
  }

  render() {
    return (
      <p className="game-description">
        { this.props.description }
        <style jsx>{`
          .game-description {
            bottom: 0;
            position: absolute;
          }
        `}</style>
      </p>
    )
  }
}
