import React from 'react'
import '../../config/setupTests'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Overlay from '.'

describe('Overlay', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Overlay />)
  })

  describe('text', () => {
    it('contains title', () => {
      expect(wrapper.text()).toContain('Tic Tac Toe')
    })

    it('draw', () => {
      wrapper.setProps({ winner: 'draw' })
      expect(wrapper.text()).toContain('It\'s a tie.')
    })

    it('player won', () => {
      wrapper.setProps({ winner: 'player1' })
      expect(wrapper.text()).toContain('You won!')
    })

    it('computer won', () => {
      wrapper.setProps({ winner: 'computer' })
      expect(wrapper.text()).toContain('You lost.')
    })
  })

  describe('handleClick', () => {
    let stub

    beforeEach(() => {
      stub = sinon.stub()
      wrapper.setProps({ handleClick: stub })
    })

    it('delegates to handleClick prop', () => {
      wrapper.instance().handleClick()
      expect(stub.calledOnce).toBe(true)
    })
  })
})
