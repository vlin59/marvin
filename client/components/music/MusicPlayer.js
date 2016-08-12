import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTracks } from '../../actions/index.js'


export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tracks: [],
      playing: null
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
    //clear all previous tracks
    this.props.setTracks([]);
    var context = this;

    axios.post('/api/spotify', { q:track }).then(function(data) {
      console.log(data.data.tracks.items);
      context.props.setTracks(data.data.tracks.items);
      context.setState({
        tracks: data.data.tracks.items
      });
    })
  }

  playMusic(i) {
    var context = this;

    if (this.state.playing) {
      this.state.playing.pause();
    }

    this.setState({
      playing: new Audio(this.state.tracks[i].preview_url)
    });

    this.state.playing.play();

  }

  render() {
    return (
      <div>
        <input type="text" id="track-input" onChange={this.handleChange.bind(this)}></input>
        <button onClick={this.searchMusic.bind(this, this.state.input)}>Submit</button>
        <div>
          { this.state.tracks.map((track, i) => {
              return (
                <div>
                  <div>{ track.name }</div>
                  <button onClick={this.playMusic.bind(this, i)}></button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    tracks: state.tracks
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setTracks: setTracks
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);