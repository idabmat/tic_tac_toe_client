import React from 'react'
import { storiesOf } from '@storybook/react'
import Overlay from '.'

storiesOf('Overlay', module)
  .add('Before starting a game', () => {
    return <Overlay />
  })
  .add('After losing a game', () => {
    return <Overlay winner="computer"/>
  })
  .add('After drawing a game', () => {
    return <Overlay winner="draw"/>
  })
  .add('After winning a game', () => {
    return <Overlay winner="player1"/>
  })
