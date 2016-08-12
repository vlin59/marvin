import React from 'react';
import axios from 'axios';


export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  searchMusic() {
    var context = this;
    axios.post('/api/spotify', {'track' : 'Hold me'}).then(function(data) {
      console.log(data.data);
    })
  }

  render() {

    return (
      <button onClick={this.searchMusic}>Submit</button>

    );
  }

}