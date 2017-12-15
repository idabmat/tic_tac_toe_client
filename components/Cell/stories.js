import React from 'react'
import { storiesOf } from '@storybook/react'
import Cell from '.'

storiesOf('Cell', module)
  .add('Player original', () => {
    return <Cell player="player1" gameMode='original' />
  })
  .add('Computer original', () => {
    return <Cell player="computer" gameMode='original' />
  })
  .add('empty original', () => {
    return <Cell player="" gameMode='original' />
  })
  .add('Player notakto', () => {
    return <Cell player="player1" gameMode='notakto' />
  })
  .add('Computer notakto', () => {
    return <Cell player="computer" gameMode='notakto' />
  })
  .add('empty notakto', () => {
    return <Cell player="" gameMode='notakto' />
  })
