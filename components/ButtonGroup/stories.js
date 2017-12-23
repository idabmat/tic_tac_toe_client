import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonGroup from '.'

const NOOP = (e) => e
const buttons = [
  {
    handleClick: NOOP,
    gameMode: 'original',
    name: 'Original Game'
  }, {
    handleClick: NOOP,
    gameMode: 'notakto',
    name: 'Notakto Game'
  }, {
    handleClick: NOOP,
    gameMode: 'misere',
    name: 'Misere Game'
  }
]

storiesOf('ButtonGroup', module)
  .add('default', () => {
    return <ButtonGroup buttons={ buttons }/>
  })
