import React from 'react';



export default class ResultsPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.event);
    return (
    <div>
      {(this.props.event.description.text)}
    </div>
    )
  }

}
