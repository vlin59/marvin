import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ResultsPageEntry from '../components/ResultsPageEntry';




class ResultsPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.events.map((event)=>
          <ResultsPageEntry event={event} />
          )}
      </div>
      )
  }

}

function mapStateToProps (state) {
  return {
    events: state.events
  };
};


export default connect(mapStateToProps)(ResultsPage);