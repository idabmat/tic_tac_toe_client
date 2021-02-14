import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Overlay from '.'

describe('Overlay', () => {
  describe('text', () => {
    it('contains title', () => {
      render(<Overlay />)
      expect(screen.getByText('Tic Tac Toe'))
    })

    it('draw', () => {
      render(<Overlay winner='draw' />)
      expect(screen.getByText('It\'s a tie.'))
    })

    it('player won', () => {
      render(<Overlay winner='player1' />)
      expect(screen.getByText('You won!'))
    })

    it('computer won', () => {
      render(<Overlay winner='computer' />)
      expect(screen.getByText('You lost.'))
    })
  })

  describe('clicking a button', () => {
    it('starts a notakto game', () => {
      const stub = jest.fn()
      render(<Overlay onClick={stub} />)
      fireEvent.click(screen.getByText('Notakto Game'))
      expect(stub).toHaveBeenCalledWith('notakto')
    })

    it('starts an original game', () => {
      const stub = jest.fn()
      render(<Overlay onClick={stub} />)
      fireEvent.click(screen.getByText('Original Game'))
      expect(stub).toHaveBeenCalledWith('original')
    })
  })

  describe('hovering over a button', () => {
    it('does not show game description at first', () => {
      render(<Overlay />)
      expect(screen.queryByText('You play as X, computer plays as O. First one to mark 3 cells in a row, column, or diagonal wins.')).toBeNull()
    })

    it('shows game description when button is hovered', () => {
      render(<Overlay />)
      const gameButton = screen.getByText('Original Game')
      fireEvent.mouseEnter(gameButton)
      expect(screen.getByText('You play as X, computer plays as O. First one to mark 3 cells in a row, column, or diagonal wins.'))
    })

    it('hides game description when button is hovered out', () => {
      render(<Overlay />)
      const gameButton = screen.getByText('Original Game')
      fireEvent.mouseEnter(gameButton)
      fireEvent.mouseLeave(gameButton)
      expect(screen.queryByText('You play as X, computer plays as O. First one to mark 3 cells in a row, column, or diagonal wins.')).toBeNull()
    })
  })
})
