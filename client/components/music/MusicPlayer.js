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
      trackName: '',
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
    if (this.state.playing) {
      this.state.track.pause();
    }

    this.setState({
      playing: false,
      track: new Audio(this.state.tracks[i].preview_url),
      trackName: this.state.tracks[i].name
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
          <div>Current Track Selected: { this.state.trackName }</div>
          <button onClick={ this.playPauseTrack.bind(this) } >Play/Pause</button>
          { this.state.tracks.map((track, i) => {
              return (
                <div className="track-name" onClick={this.setTrack.bind(this, i)}>
                  <img src={ track.album.images[0].url } className="col-xs-3"></img>
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