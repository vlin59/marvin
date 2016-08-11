import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { setCalendar } from '../../actions/index.js';
import { connect } from 'react-redux';
import CalendarEntry from './CalendarEntry';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
const Loader = require('react-loader');

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);


class CalendarPage extends React.Component {
  constructor(props){
    super(props);
  }


  componentWillMount(){
    var context = this;
    const code = this.props.location.query.code;

    this.setState({
      loaded: false
    });

    this.getEvents(code, function(events){

      const formattedEvents = context.formatEvents(events);

      context.props.setCalendar(formattedEvents);

      context.setState({
        loaded: true
      });
    });



  }

  convertDate(time){
    var date = new Date(Date.parse(time));
    return date.toString();
  }


  componentWillReceiveProps(){
    this.formatEvents(this.props.events);
  }

  getEvents(code, cb){

    axios.post('/google',{
      params: {
        code: code
      }
    })
    .then(function (data) {
      cb(data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  formatEvents(events){
    var final = [];

    console.log(events);
    events.forEach(function(event) {

      final.push({
        start: event.start.date,
        end: event.end.date,
        title: event.summary,
        month: moment(event.start.date).format("MM")
      });
    });

    return final;
  }

  render() {

    let options = {
      lines: 17,
      length: 28,
      width: 2,
      radius: 36,
      corners: 1,
      opacity: .05,
      rotate: 0,
      direction: 1,
      color: 'black',
      speed: 1,
      trail: 100,
      shadow: false,
      hwaccel: false,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      scale: 1.00
    };

    return (
      <div className="container">
       <Loader loaded={this.state.loaded} options={options} className="spinner">
        <h1>Your Calendar</h1>
        <BigCalendar
          selectable
          defaultView='week'
          events={this.props.events}
          popup={true}
          onSelectEvent={event => alert(event.title)}
        />
      </Loader>

      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
    events: state.calendar
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setCalendar: setCalendar
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);


 // <BigCalendar
 //          events={this.formatEvents}
 //          startAccessor='start'
 //          endAccessor='end'
 //          titleAccessor='title'
 //        />