import React from 'react';
import Search from '../containers/Search.js'

export default class main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <h1>HOMELESSDUDE</h1>
        {this.props.children}
        <Search />
      </div>
      )
  }

}