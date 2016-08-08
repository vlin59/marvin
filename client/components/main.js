import React from 'react';
import Search from '../containers/Search.js'
import Nav from './Nav'


export default class main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <Nav />
        {this.props.children}
        <Search />
      </div>
      )
  }

}