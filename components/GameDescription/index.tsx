import React from 'react'

const GameDescriptions = ({ description }) => {
  return (
    <p className="game-description">
      { description }
      <style jsx>{`
          .game-description {
            bottom: 0;
            position: absolute;
          }
        `}</style>
    </p>
  )
}

export default GameDescriptions
