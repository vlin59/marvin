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
      track: null,
      playing: false
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

  setTrack(i) {
    this.setState({
      track: new Audio(this.state.tracks[i].preview_url)
    });
  }

  playPauseTrack() {
    this.state.playing ? this.state.track.pause() : this.state.track.play();
    this.setState({
      playing: !this.state.playing
    })
  }

  render() {
    return (
      <div>
        <input type="text" id="track-input" onChange={this.handleChange.bind(this)}></input>
        <button onClick={this.searchMusic.bind(this, this.state.input)}>Submit</button>
        <div>
          <button onClick={ this.playPauseTrack.bind(this) } >Play/Pause</button>
          { this.state.tracks.map((track, i) => {
              return (
                <div className="track-name" onClick={this.setTrack.bind(this, i)}>{ track.name }</div>
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