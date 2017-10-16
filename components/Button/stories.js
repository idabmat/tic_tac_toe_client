import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Button', module)
  .add('default', () => {
    return <Button name="This is a button" />
  })
