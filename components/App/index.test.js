import React from 'react'
import '../../config/setupTests'
import { shallow } from 'enzyme'
import App from '.'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  describe('Initialization', () => {
    it('loads with an empty board', () => {
      const emptyBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]
      expect(wrapper.state().board).toEqual(emptyBoard)
    })
    it('loads without a currentPlayer', () => {
      expect(wrapper.state().currentPlayer).toBe(null)
    })
  })
})
