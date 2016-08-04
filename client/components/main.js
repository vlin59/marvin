import React from 'react';

export default class main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <h1>HOMELESSDUDE</h1>
        {this.props.children}
      </div>
      )
  }

}