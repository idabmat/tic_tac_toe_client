import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Grid from '.'

describe('Grid', () => {
  describe('cellClicked', () => {
    it('calls the cellClicked prop with the position', () => {
      const stub = jest.fn()
      const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
      const { container } = render(<Grid board={ board } cellClicked={ stub } />)
      fireEvent.click(container.querySelector('.cell:nth-child(3)'))
      expect(stub).toHaveBeenCalledWith(3)
    })
  })

  describe('render', () => {
    it('renders 9 cells', () => {
      const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
      const { container } = render(<Grid board={board} />)
      expect(container.querySelectorAll('.cell').length).toEqual(9)
    })

    it('passes the player to the cell', () => {
      const board = [
        ['player1', null, null],
        [null, null, null],
        [null, null, null]
      ]
      render(<Grid board={board} />)
      expect(screen.findByText('X'))
    })
  })
})
