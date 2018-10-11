// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor (props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render () {
    return (this.state.secondsLeft === 0 ? (<p>Boom!</p>) : (<p>{this.state.secondsLeft} seconds left before I go boom!</p>))

  //   if (this.state.secondsLeft === 0) {
  //     return (
  //       <p>
  //         Boom!
  //       </p>
  //     )
  //   } else {
  //     return (
  //       <p>
  //         {this.state.secondsLeft} seconds left before I go boom!
  //       </p>
  //     )
  //   }
  }
}
