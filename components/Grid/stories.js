import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from '.'

const board = [
  ['player1' , 'computer', null      ],
  ['computer', 'player1' , null      ],
  [null      , null      , 'computer']
]
storiesOf('Grid', module)
  .add('default', () => {
    return <Grid board={board} />
  })
