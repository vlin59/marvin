import React from 'react';
import { searchEvents } from '../actions/index.js'

export default class search extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <input type='text'></input>
        <button>Search Events</button>
      </div>
      )
  }
}