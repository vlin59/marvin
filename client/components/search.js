import React from 'react';
import { searchEvents } from '../actions/index.js'

export default class search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    console.log(this.state)
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        ></input>
        <button onClick={searchEvents}>Search Events</button>
      </div>
      )
  }
}