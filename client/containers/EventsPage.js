import React from 'react';
import { bindActionCreators } from 'redux';
import { setCalendar } from '../actions/index';
import { connect } from 'react-redux';
import Search from './Search';
import MarvinBrain from './MarvinBrain';
import axios from 'axios';


class EventsPage extends React.Component{
  constructor (props) {
    super(props);
  }

  componentDidUpdate(){

    if(this.props.user){
      axios.get('/me')
      .then(function(res){
        const user = {
          email: res.data.account.email,
          firstName: res.data.account.givenName,
          lastName: res.data.account.surname
        }
        axios.post('/api/user/save', user)
        .then(function(res){
          console.log(res.data);
        });
      });
    }

  }

  render (){
    return(
      <div className="top">
        <div className="text-xs-center">
          <div className="row">
            <div className="col-md-5 text-xs-right">
              <img className="marvin-img marvin-rotate" src="styles/marvin_robot.png" />
            </div>

            <div className="col-md-6 marvin-intro">
            <div className="row">
              <h2 className="marvin-headline marvin-yellow">Hello, I'm Marvin</h2>
              <p className="lead white">Your Intuitive Personal Butler</p>
              <p className="white">Outsource all the hard work to Marvin who will help you organize your life and find fun things to do - minus the trouble of planning.</p>
            </div>

             <div className="row text-xs-center">
              <MarvinBrain />
            </div>


            </div>


          </div>



        </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    events: state.events,
    user: state.user
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setCalendar: setCalendar
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);