import React from 'react';
import axios from 'axios';


export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  searchMusic() {
    axios.get({
        url: 'https://api.spotify.com/v1/search/',
        data: {
            q: 'Hold Me',
            type: 'album'
        }
    }).then(function(data) {
        console.log(JSON.parse(data));
    });
  }

  render() {

    return (
      <button onClick={this.searchMusic}>Submit</button>

    );
  }

}