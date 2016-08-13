import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

const components = [
  { title: 'title', component: '' }
]

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  handleChange(event) {

  }


  render() {
    return ({
      <div>
        { components.map(comp => {
          return (
            <div> { comp.title } </div>
            )
        }) }
      </div>
    })
  }

}

function mapStateToProps (state) {
  return {
    search: state
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setEvents: setEvents
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

