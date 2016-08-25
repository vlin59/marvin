import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setReminder } from '../../actions/index.js';
import axios from 'axios';
import moment from 'moment';
import DatePicker from'react-datepicker';
import { browserHistory } from 'react-router';


class Reminders extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reminder: '',
      date: moment(),
      hours: 12,
      min: 15,
      when: 'am',
      errMsg: ''
    }
    this.handleDate = this.handleDate.bind(this);
    this.handleReminder = this.handleReminder.bind(this);
    this.changeWhen = this.changeWhen.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.handleMin = this.handleMin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveReminder = this.saveReminder.bind(this);
  }

  saveReminder(eventTime){
    const params = {
      event:{
        name: {
          text: this.state.reminder
        },
        description:{
          text: this.state.reminder
        },
        start:{
          local: eventTime
        },
        end:{
          local: eventTime
        }
      }
    };
    const context = this;
    axios.post('/calendar/save', {
        params
      })
      .then(function (data) {
          context.props.setReminder(context.state.reminder, eventTime);
          browserHistory.push('/calendar/new');
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  convertDate(momentItem,hour,min){
    momentItem.hour(hour);
    momentItem.minute(min);
  }

  handleSubmit(){
    let hour = this.state.hours;
    const min = this.state.min;
    const date = this.state.date;
    const when = this.state.when;

    if(Number(hour)>12 || Number(hour)<0 || Number(min)>59 || Number(min)<0){
      this.setState({
        errMsg: 'Please provide a correct time'
      });
      return;
    }

    const now = moment();
    //convert hour depending on ampm

    if(when ==='pm' && hour != 12) hour = Number(hour) + 12;

    //same date, later time
    if(date.get('year') == now.get('year') &&
      date.get('month') == now.get('month') &&
      date.get('date') == now.get('date') &&
      hour==now.hour() &&
      min > now.minute()){

      this.convertDate(date,hour,min);
      this.saveReminder(date.format());

    //future date
    }else if(date.get('year') == now.get('year') &&
      date.get('month') == now.get('month') &&
      date.get('date') == now.get('date') &&
      hour > now.hour()){

      this.convertDate(date,hour,min);
      this.saveReminder(date.format());


    }else if(date.get('year') >= now.get('year') &&
      date.get('month') >= now.get('month') &&
      date.get('date') > now.get('date')){

       this.convertDate(date,hour,min);
       this.saveReminder(date.format());
    }else{
      this.setState({
        errMsg: 'You need to pick a future time!'
      });
    }
  }

  handleReminder(e){
    this.setState({
      reminder: e.target.value
    });
  }
  handleHours(e){
    this.setState({
      hours: e.target.value
    });
  }
  handleMin(e){
    this.setState({
      min: e.target.value
    });
  }

  handleDate(date) {
    this.setState({
      date
    });
  }
  changeWhen(e){
    this.setState({
      when: e.target.value
    });
  }

  render(){
    return (
      <div className ='container-fluid'>
      <div className = 'row'>
        <div className ='form-group'>
          <input type = "text" className="form-control" placeholder='Add a reminder' value={this.state.reminder}onChange={this.handleReminder}/>
          <div className="date-padding">
          <DatePicker
          className="form-control"
          selected={this.state.date}
          onChange={this.handleDate}
          />
          </div>
        </div>
        <div className='row'>
          <div className ='col-sm-4'>
            <input type = 'number' className="form-control" max='12' min ='1' value={this.state.hours}onChange={this.handleHours}/>
          </div>

          <div className ='col-sm-4'>
            <input type = 'number' className="form-control" max= '59' min ='0' value = {this.state.min}onChange={this.handleMin}/>
          </div>
          <div className ='col-sm-4'>
            <select className="form-control" value = {this.state.am} onChange={this.changeWhen}>
                <option>am</option>
                <option>pm</option>
            </select>
          </div>
        </div>

          <button className="btn btn-default btn-padding full" onClick={this.handleSubmit}>Create</button>
          <p> {this.state.errMsg} </p>
        </div>
      </div>
      )
  }
}

function mapStateToProps (state) {
  return {

  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setReminder: setReminder
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminders);
