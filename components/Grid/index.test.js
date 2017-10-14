import React from 'react'
import '../../config/setupTests'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import Grid from '.'

describe('Grid', () => {
  describe('cellClicked', () => {
    it('calls the cellClicked prop with the position', () => {
      const stub = sinon.stub()
      const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
      const wrapper = shallow(<Grid board={ board } cellClicked={ stub } />)
      wrapper.instance().cellClicked(3)
      expect(stub.calledWith(3))
    })
  })

  describe('render', () => {
    it('renders 9 cells', () => {
      const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
      const wrapper = mount(<Grid board={board} />)
      expect(wrapper.find('Cell').length).toEqual(9)
    })

    it('passes the player to the cell', () => {
      const board = [
        ['player1', null, null],
        [null, null, null],
        [null, null, null]
      ]
      const wrapper = mount(<Grid board={board} />)
      expect(wrapper.find('Cell').first().props().player).toEqual('player1')
    })
  })
})
