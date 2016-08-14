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


    // this.saveAppointment(appointment, function(confirmation){

    // });

  }

  saveAppointment(){

    axios.post('/calendar/save')
    .then(function (data) {
      cb(data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {


    return (
      <div>
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