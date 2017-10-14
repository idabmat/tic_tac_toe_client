import React from 'react'
import '../../config/setupTests'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Cell from '.'

describe('Cell', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Cell />)
  })

  describe('render', () => {
    it('renders the player symbol', () => {
      wrapper.setProps({ player: 'player1' })
      expect(wrapper.text()).toContain('X')
    })
  })

  describe('renderContent', () => {
    it('returns X for player1', () => {
      wrapper.setProps({ player: 'player1' })
      expect(wrapper.instance().renderContent()).toEqual('X')
    })
    it('returns O for computer', () => {
      wrapper.setProps({ player: 'computer' })
      expect(wrapper.instance().renderContent()).toEqual('O')
    })
  })

  describe('onClick', () => {
    it('calls the handleClick prop with the current position', () => {
      const stub = sinon.stub()
      wrapper.setProps({ handleClick: stub, position: 5 })
      wrapper.simulate('click')
      expect(stub.calledWith(5)).toEqual(true)
    })
  })
})
