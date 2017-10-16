import React from 'react'
import { storiesOf } from '@storybook/react'
import Cell from '.'

storiesOf('Cell', module)
  .add('Player', () => {
    return <Cell player="player1" />
  })
  .add('Computer', () => {
    return <Cell player="computer" />
  })
