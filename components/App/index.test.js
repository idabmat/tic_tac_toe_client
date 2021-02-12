import React from 'react'
import App from '.'
import { render, screen, fireEvent } from '@testing-library/react'

describe('App', () => {
  it('shows buttons to choose a game mode', () => {
    render(<App />)
    expect(screen.getByText('Original Game'))
  })

  it('clicking the button starts the game', () => {
    render(<App />)
    const originalGame = screen.getByText('Original Game')
    fireEvent.click(async () => originalGame)
    expect(screen.queryByText('Tic Tac Toe')).toBeNull()
  })

  // describe('Initialization', () => {
  //   it('loads with an empty board', () => {
  //     const emptyBoard = [
  //       [null, null, null],
  //       [null, null, null],
  //       [null, null, null]
  //     ]
  //     expect(wrapper.state().board).toEqual(emptyBoard)
  //   })
  // })
  //
  // describe('WebSocket channel', () => {
  //   let channelMock
  //
  //   beforeEach(() => {
  //     channelMock = sinon.mock(wrapper.instance().channel)
  //   })
  //
  //   afterEach(() => {
  //     channelMock.verify
  //     channelMock.restore()
  //   })
  //
  //   it('newGame pushes new_game message to the socket', () => {
  //     channelMock.expects('push').withArgs('new_game', 'original')
  //     wrapper.instance().newGame('original')
  //   })
  //
  //   it('computerMove pushes computer_move message to the socket', () => {
  //     channelMock.expects('push').withArgs('computer_move')
  //     wrapper.instance().computerMove()
  //   })
  //
  //   it('handleCellClicked pushes player_move message to the socket', () => {
  //     channelMock.expects('push').withArgs('player_move', 3)
  //     wrapper.instance().handleCellClicked(3)
  //   })
  // })
  //
  // describe('updateState', () => {
  //   it('updates the component state', () => {
  //     const gameState = {
  //       board: [
  //         [null, null     , null],
  //         [null, 'player1', null],
  //         [null, null     , null]
  //       ],
  //       gameMode: null
  //     }
  //     wrapper.instance().updateState(gameState)
  //     expect(wrapper.state()).toEqual(gameState)
  //   })
  //
  //   it('calls computer move if it is the computer\'s turn', () => {
  //     const gameState = { current_player: 'computer' }
  //     const computerMoveStub = sinon.stub(App.prototype, 'computerMove')
  //     wrapper.instance().updateState(gameState)
  //     expect(computerMoveStub.calledOnce).toEqual(true)
  //   })
  // })
  //
  // describe('renderOverlay', () => {
  //   it('renders the Overlay before game starts', () => {
  //     expect(wrapper.instance().renderOverlay()).toBeDefined
  //   })
  //
  //   it('renders the Overlay if a winner is set', () => {
  //     wrapper.setState({ winner: 'computer' })
  //     expect(wrapper.instance().renderOverlay()).toBeDefined
  //   })
  //
  //   it('does not render the Overlay if there is no winner', () => {
  //     wrapper.setState({ winner: null })
  //     expect(wrapper.instance().renderOverlay()).toBeUndefined
  //   })
  // })
  //
  // describe('connects to websocket after component mounted', () => {
  //   let createSocketStub, connectStub, channelStub
  //
  //   beforeEach(() => {
  //     connectStub = sinon.stub()
  //     channelStub = sinon.stub()
  //     createSocketStub = sinon.stub(App.prototype, 'createSocket')
  //       .returns({
  //         connect: connectStub,
  //         channel: channelStub
  //       })
  //     wrapper = mount(<App />)
  //   })
  //
  //   afterEach(() => {
  //     createSocketStub.restore()
  //   })
  //
  //   it('calls the createSocket function', () => {
  //     expect(createSocketStub.called).toBe(true)
  //   })
  //
  //   it('connects to the socket', () => {
  //     expect(connectStub.called).toBe(true)
  //   })
  //
  //   it('creates a channel', () => {
  //     expect(channelStub.calledWith('game:new', {})).toBe(true)
  //   })
  // })
})
