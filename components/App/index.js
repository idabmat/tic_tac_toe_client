import React from 'react'
import Grid from '../Grid'

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      currentPlayer: null,
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
    }
  }

  handleCellClicked(position) {
    console.log(position)
  }

  render() {
    return(
      <Grid board={ this.state.board } cellClicked={ this.handleCellClicked.bind(this) }/>
    )
  }
}
