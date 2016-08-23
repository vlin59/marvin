import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CalendarAppointment extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      phone: '',
      newEmail: ''
    }

    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.setReminder = this.setReminder.bind(this);


  }

  componentWillMount(){
    const id = this.props.location.query.id;

    if(id){
      const appointment = this.props.events.filter((event) => {
        return event.id === id;
      });

      this.saveAppointment(appointment[0], function(confirmation){
        console.log(confirmation);
      });
    }

  }

  handlePhone(e){
    this.setState({
      phone: e.target.value
    })
  }

  handleEmail(e){
    this.setState({
      newEmail: e.target.value
    })
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

  setReminder(){
    const num = this.state.phone;
    const newEmail = this.state.newEmail;

    if(this.props.location.query.id){
      const id = this.props.location.query.id;
      const appointment = this.props.events.filter((event) => {
        return event.id === id;
      });
      const reminder = appointment[0].name.text;
      const time = appointment[0].start.local;

      axios.post('/api/user/events', {
        email: this.props.user.email,
        num,
        newEmail,
        time,
        reminder
       })
      .then(data =>{
        console.log(data.data);
        browserHistory.push('/dashboard')
      });

    }else{
    const time = this.props.reminder.time;
    const reminder = this.props.reminder.reminder;

      axios.post('/api/user/events', {
        email: this.props.user.email,
        num,
          newEmail,
        time,
          reminder
       })
      .then(data =>{
        console.log(data.data);
        browserHistory.push('/dashboard')
      });

    }
  }



  render() {

    return (
      <div className="container text-xs-center">
        <div className="page">
         <div className="row">
          <h1>Event successfully added to your calendar!</h1>
          <p className="lead"> Would you like to set up a reminder?</p>
          <input onChange = {this.handlePhone}type="text" maxlength="10" placeholder="Put in your 10 digit number!"/>
          <button onClick = {this.setReminder} className="btn btn-default">SMS/Email Reminder</button>
          <input onChange = {this.handleEmail}type="text" placeholder="Different email? Input it here"/>
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
    user: state.user,
    events: state.events,
    reminder: state.reminder
  };
};

export default connect(mapStateToProps)(CalendarAppointment);