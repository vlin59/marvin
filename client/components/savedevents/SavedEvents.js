import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSavedEvents } from '../../actions/index.js';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

export default class SavedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getSavedEvents() {
    let url = '/api/user/events/' + this.props.email;
    axios.get(url)
      .then(data =>{
        this.props.setSavedEvents(data.data);
      });
  }

  componentWillMount(){
    this.getSavedEvents();
  }

  render() {
    return(
      <div>
        {this.props.savedevents.map((event) => {
          let time = new Date(Date.parse(event.time))
          time = time.toUTCString();
          return (
            <div classname="row" style={ { textAlign: "left", overflow: "auto" } }>
              <div>
                <span>
                  <FontAwesome name='square' size='1x' />
                </span>
              { "  "+event.name }
              </div>
              <div>
                <span>
                  <FontAwesome name='clock-o' size='1x' />
                </span>
              { time }
              </div>
            </div>
          );
        })}
      </div>
    )
  }


}

function mapStateToProps (state) {
  return {
    email: state.user.email,
    savedevents: state.savedevents
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setSavedEvents: setSavedEvents
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedEvents);