import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTracks } from '../actions/index.js'


export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange() {
    let val = document.getElementById('track-input')

    this.setState({
      input: val.value
    });
    console.log(this.state);
  }

  searchMusic(track) {
    axios.post('/api/spotify', { q:track }).then(function(data) {
      console.log(data.data);
    })
  }

  render() {
    return (
      <div>
      <input type="text" id="track-input" onChange={this.handleChange.bind(this)}></input>
      <button onClick={this.searchMusic.bind(this, this.state.input)}>Submit</button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    search: state
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setTracks: setTracks
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);