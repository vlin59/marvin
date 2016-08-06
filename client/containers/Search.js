import React from 'react';
import { searchEvents } from '../actions/index.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
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
        <button onClick={
          this.props.searchEvents.bind(this, this.state.value)
        }
        >Search Events</button>
      </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    search: state
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    searchEvents: searchEvents
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

