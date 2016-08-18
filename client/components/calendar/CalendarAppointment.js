import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class CalendarAppointment extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const id = this.props.location.query.id;


    const appointment = this.props.events.filter((event) => {
      return event.id === id;
    });

    this.saveAppointment(appointment[0], function(confirmation){
      console.log(confirmation);
    });

  }

  saveAppointment(event, cb){

    axios.post('/calendar/save', {
      params: {
        event: event
      }
    })
    .then(function (data) {
      cb(data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {


    return (
      <div className="container text-xs-center">
        <div className="page">
         <div className="row">
          <h1>Event successfully added to your calendar!</h1>
          <p className="lead"> Would you like to set up a reminder?</p>
          <button className="btn btn-default">SMS Reminder</button>
          <button className="btn btn-default">Email Reminder</button>
         </div>

        <div className="row">
          <h2>Marvin can also hold you accountable for missing an event more than once...</h2>
          <p className="lead">Report to Marvin or suffer the consequences! Not feeling like working out at 5:00 am? Too bad, Marvin will turn on the lights - yes, he can do that!</p>
          <button className="btn btn-default">Activate Marvin's Coach Mode</button>
        </div>

        </div>
      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(CalendarAppointment);