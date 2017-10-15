import React from 'react'
import '../../config/setupTests'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import App from '.'

const NOOP = (e) => e

describe('App', () => {
  let wrapper, mock

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  describe('Initialization', () => {
    it('loads with an empty board', () => {
      const emptyBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
      expect(wrapper.state().board).toEqual(emptyBoard)
    })
  })

  describe('WebSocket channel', () => {
    let channelMock

    beforeEach(() => {
      channelMock = sinon.mock(wrapper.instance().channel)
    })

    afterEach(() => {
      channelMock.restore()
    })

    it('newGame pushes new_game message to the socket', () => {
      channelMock.expects('push').withArgs('new_game')
      wrapper.instance().newGame()
      channelMock.verify
    })

    it('computerMove pushes computer_move message to the socket', () => {
      channelMock.expects('push').withArgs('computer_move')
      wrapper.instance().computerMove()
      channelMock.verify
    })

    it('handleCellClicked pushes player_move message to the socket', () => {
      channelMock.expects('push').withArgs('player_move', 3)
      wrapper.instance().handleCellClicked(3)
      channelMock.verify
    })
  })

  describe('updateState', () => {
    it('updates the component state', () => {
      const gameState = {
        board: [
          [null, null     , null],
          [null, 'player1', null],
          [null, null     , null]
        ]
      }
      wrapper.instance().updateState(gameState)
      expect(wrapper.state()).toEqual(gameState)
    })

    it('calls computer move if it is the computer\'s turn', () => {
      const gameState = { current_player: 'computer' }
      const computerMoveStub = sinon.stub(App.prototype, 'computerMove')
      wrapper.instance().updateState(gameState)
      expect(computerMoveStub.calledOnce).toEqual(true)
    })
  })
})
