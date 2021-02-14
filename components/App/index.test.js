import React from 'react'
import App from '.'
import { render, screen, fireEvent } from '@testing-library/react'

describe('App', () => {
  const emptyBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  describe('when winner is undefined', () => {
    it('shows the overlay', () => {
      render(<App board={emptyBoard} />)
      expect(screen.getByText('Tic Tac Toe'))
    })
  })

  describe('when winner is player', () => {
    it('shows the overlay', () => {
      render(<App winner='player' board={emptyBoard}/>)
      expect(screen.getByText('Tic Tac Toe'))
    })
  })

  describe('when winner is computer', () => {
    it('shows the overlay', () => {
      render(<App winner='computer' board={emptyBoard}/>)
      expect(screen.getByText('Tic Tac Toe'))
    })
  })

  describe('when winner is null', () => {
    it('does not show the overlay', () => {
      render(<App winner={null} board={emptyBoard}/>)
      expect(screen.queryByText('Tic Tac Toe')).toBeNull()
    })
  })
})
