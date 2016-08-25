import React from 'react';
import { setEvents, setMovies, setVenues, setLights } from '../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Transcriber from '../components/transcriber/Transcriber';

class MarvinBrain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: "",
      lat: '0.0',
      long: '0.0',
      lights: ''
    }

    this.searchEvents = this.searchEvents.bind(this);
    this.clickHander = this.clickHandler.bind(this);
    this.redirectSearch = this.redirectSearch.bind(this);

     navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude.toString(),
        long: position.coords.longitude.toString()
      });
    });

  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });

  }

  searchEvents (search) {
    //clear state
    this.props.setEvents([]);
    //then do search stuff
    var context = this;
    axios.post('/api/eventbrite', search).then(function(data) {
      context.props.setEvents(data.data.events);
    });
    browserHistory.push('/results');
  }


  searchYelp (search) {
    //clear state
    this.props.setVenues([]);
    //then do search stuff
    var context = this;
    axios.post('/api/yelp', search).then(function(data) {
      console.log(data);
      context.props.setVenues(data.data.businesses);
    });
    browserHistory.push('/yelp/results');
  }

  redirectSearch(options){
    const type = options[0];
    const query = options[1];

    var search = {
      query: query,
      lat: this.state.lat,
      long: this.state.long
    }

    console.log(type);

    if(type === 'eventSearch'){
      this.searchEvents(search);
    }

    if(type === 'yelpSearch'){
      this.searchYelp(search);
    }

    if(type === 'lights'){
      this.toggleLights();
    }

    if(type === "playMusic"){
      console.log("Let's play music");
      browserHistory.push('/music');
    }
  }

  toggleLights() {
    this.props.setLights([]);
    var context = this;
    axios.post('/api/lights').then(function(data) {
      context.props.setLights(data.data.status);
      context.setState({
        lights: data.data.status
      });
    });
  }

  onTranscription(recognized) {

    this.setState({
      query: this.state.query + recognized,
    });
  }

  clickHandler(){
    const self = this;
    axios.post('/marvin/query', {
      params: {
        query: this.state.query
      }
    })
    .then(function (data) {
      self.redirectSearch(data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }


  render() {
    return (
      <div>
      <input type="text" className="form-control" value={this.state.query} onChange={this.handleChange.bind(this)} />
      <p>{this.state.query}</p>
      <button onClick={()=>{this.clickHandler()}} className="btn btn-default">
      Submit
      </button>
      <Transcriber onTranscription={this.onTranscription.bind(this)} />
      </div>
      )
  }
}


function mapStateToProps (state) {
  return {
    search: state,
    lights: state.lights
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setVenues: setVenues,
    setEvents: setEvents,
    setMovies: setMovies,
    setLights: setLights
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MarvinBrain);

