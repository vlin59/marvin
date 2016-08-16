import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { setWeather } from '../../actions/index.js'


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    }
  }

  getCurrentPosition(){
    navigator.geolocation.getCurrentPosition(position => {
      query.params.lat = position.coords.latitude.toString();
      query.params.lon = position.coords.longitude.toString();
    });
  }

  getWeather() {
    this.props.setWeather([]);
    var context = this;
    var query = {
      params: {
        lat: '0',
        lon: '0'
      }
    };
    navigator.geolocation.getCurrentPosition(position => {
      query.params.lat = position.coords.latitude.toString();
      query.params.lon = position.coords.longitude.toString();
      axios.get('/api/weather', query)
      .then(function(data) {
        console.log('weather data', data.data);
        context.props.setWeather(data.data);
        context.setState({
          weather: data.data
        });
      });
    });
  }

  componentWillMount() {
    this.getWeather.call(this)
  }

  render() {
    return (
      <div>
        <h3>Weather</h3>
        <div>
         <h3>{JSON.stringify(this.state.weather)}</h3>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    weather: state.weather
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setWeather: setWeather
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);