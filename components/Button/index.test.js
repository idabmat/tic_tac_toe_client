import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Button from '.'

describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Button />)
  })

  describe('when clicking on it', () => {
    it('calls the handleClick prop', () => {
      const stub = sinon.stub()
      wrapper.setProps({ handleClick: stub })
      wrapper.simulate('click')
      expect(stub.calledOnce).toBe(true)
    })
  })

  describe('when hovering over it', () => {
    it('calls the handleClick prop', () => {
      const stub = sinon.stub()
      wrapper.setProps({ handleMouseEnter: stub, index: 0 })
      wrapper.simulate('mouseenter')
      expect(stub.calledWith(0)).toBe(true)
    })
  })

  describe('when hovering out of it', () => {
    it('calls the handleClick prop', () => {
      const stub = sinon.stub()
      wrapper.setProps({ handleMouseLeave: stub, index: 0 })
      wrapper.simulate('mouseleave')
      expect(stub.calledWith(0)).toBe(true)
    })
  })
})
