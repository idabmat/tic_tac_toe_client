import React from 'react'
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
    it('returns X for computer when game mode is Notakto', () => {
      wrapper.setProps({ gameMode: 'notakto', player: 'computer' })
      expect(wrapper.instance().renderContent()).toEqual('X')
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

  describe('styles', () => {
    it('default to cell', () => {
      const classnames = wrapper.instance().styles()
      expect(classnames).toEqual('cell')
    })

    it('when clicked by computer', () => {
      wrapper.setProps({player: 'computer'})
      const classnames = wrapper.instance().styles()
      expect(classnames).toEqual('cell clicked computer')
    })

    it('when clicked by player', () => {
      wrapper.setProps({player: 'player1'})
      const classnames = wrapper.instance().styles()
      expect(classnames).toEqual('cell clicked player')
    })
  })
})
