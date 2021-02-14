import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Cell from '.'

describe('Cell', () => {
  describe('render', () => {
    it('renders the player symbol', () => {
      render(<Cell player='player1' />)
      expect(screen.getByText('X'))
    })
  })

  describe('renderContent', () => {
    it('returns X for player1', () => {
      render(<Cell player='player1' />)
      expect(screen.getByText('X'))
    })
    it('returns O for computer', () => {
      render(<Cell player='computer' />)
      expect(screen.getByText('O'))
    })
    it('returns X for computer when game mode is Notakto', () => {
      render(<Cell gameMode='notakto' player='computer' />)
      expect(screen.getByText('X'))
    })
  })

  describe('onClick', () => {
    it('calls the handleClick prop with the current position', () => {
      const stub = jest.fn()
      const { container } = render(<Cell onClick={stub} position={5} />)
      fireEvent.click(container.querySelector('.cell'))
      expect(stub).toHaveBeenCalledWith(5)
    })
  })
})
