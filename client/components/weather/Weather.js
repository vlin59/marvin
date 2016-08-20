import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { setWeather } from '../../actions/index.js'


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {}
    }
  }

  titleCase(str) {
    var str = str.toLowerCase().split(' ');
    for(var i = 0; i < str.length; i++){
      str[i] = str[i].split('');
      str[i][0] = str[i][0].toUpperCase();
      str[i] = str[i].join('');
    }
    return str.join(' ');
  }



  getWeather() {
    this.props.setWeather({});
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
        //console.log('weather data', data.data.city.name);
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
    var weather = this.state.weather;
    var city = weather.name || '';
    var main = weather.main || '';
    var description = '';
    var high = '';
    var low = '';
    var current = '';

    if (main !== '') {
      high ="Highs: " + Math.round(weather.main.temp_max) + "\xB0";
      low = "Lows: "+ Math.round(weather.main.temp_min) + "\xB0";
      current = Math.round(weather.main.temp) + "\xB0";
      description = this.titleCase.call(this, weather.weather[0].description.toString());
    }


    return (
      <div>
          <h3>{city}</h3>
          <h3>{current}</h3>
          <h5>{high}</h5>
          <h5>{low}</h5>
          <h5>{description}</h5>
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