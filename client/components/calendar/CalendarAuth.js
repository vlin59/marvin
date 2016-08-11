import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';


class CalendarAuth extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    var context = this;
    this.getToken(function(url){
      window.location.href = url;
    });
  }

  getToken(cb){

    axios.post('/calendarauth')
    .then(function (data) {
      cb(data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    return (
      <div></div>
    )
  }

}

export default CalendarAuth;