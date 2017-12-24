import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import Overlay from '.'

describe('Overlay', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Overlay />)
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

    describe('when clicking the notakto game', () => {
      beforeEach(() => {
        wrapper.find({name: 'Notakto Game'}).simulate('click')
      })

      it('calls the handleClick with notakto', () => {
        expect(stub.calledWith('notakto')).toBe(true)
      })
    })


    describe('when clicking the original game', () => {
      beforeEach(() => {
        wrapper.find({name: 'Original Game'}).simulate('click')
      })

      it('calls the handleClick with original', () => {
        expect(stub.calledWith('original')).toBe(true)
      })
    })
  })

  describe('button active property', () => {
    let index

    beforeEach(() => {
      index = 0
    })

    it('defaults to false', () => {
      expect(wrapper.state().buttons[index].active).toBe(false)
    })

    describe('when mouse enters a button', () => {
      beforeEach(() => {
        wrapper.instance().handleMouseEnter(index)
      })

      it('sets it as active', () => {
        expect(wrapper.state().buttons[index].active).toBe(true)
      })
    })

    describe('when mouse leaves a button', () => {
      beforeEach(() => {
        wrapper.instance().handleMouseEnter(index)
        wrapper.instance().handleMouseLeave(index)
      })

      it('sets a button as active', () => {
        expect(wrapper.state().buttons[index].active).toBe(false)
      })
    })
  })

  describe('when first button is active', () => {
    beforeEach(() => {
      wrapper.instance().handleMouseEnter(0)
    })

    it('activeButton should return the first one', () => {
      const activeButton = wrapper.state().buttons[0]
      expect(wrapper.instance().activeButton()).toEqual(activeButton)
    })

    it('activeDescription should be the one for the original game', () => {
      const firstDescription = wrapper.state().buttons[0].description
      expect(wrapper.instance().activeDescription()).toEqual(firstDescription)
    })

    it('should contain the game description', () => {
      const firstDescription = wrapper.state().buttons[0].description
      expect(wrapper.text()).toContain(firstDescription)
    })
  })

  describe('when second button is active', () => {
    beforeEach(() => {
      wrapper.instance().handleMouseEnter(1)
    })

    it('activeButton should return the second one', () => {
      const activeButton = wrapper.state().buttons[1]
      expect(wrapper.instance().activeButton()).toEqual(activeButton)
    })

    it('activeDescription should be the one for the notakto game', () => {
      const secondDescription = wrapper.state().buttons[1].description
      expect(wrapper.instance().activeDescription()).toEqual(secondDescription)
    })
  })
})
