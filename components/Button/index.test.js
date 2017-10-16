import React from 'react'
import '../../config/setupTests'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Button from '.'

describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Button />)
  })

  describe('onClick', () => {
    it('calls the handleClick prop', () => {
      const stub = sinon.stub()
      wrapper.setProps({ handleClick: stub })
      wrapper.simulate('click')
      expect(stub.calledOnce).toBe(true)
    })
  })
})
