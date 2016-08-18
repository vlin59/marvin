import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLights } from '../../actions/index.js'

export default class Lights extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lights: ''
    }
  }

  getStatus() {
    this.props.setLights([]);
    var context = this;
    axios.get('/api/lights').then(function(data) {
      context.props.setLights(data.data.status);
      context.setState({
        lights: data.data.status
      });
    });
  }
  toggleLights() {
    this.props.setLights([]);
    var context = this;
    axios.post('/api/lights').then(function(data) {
      context.props.setLights(data.data.status);
      context.setState({
        lights: data.data.status
      });
    });
  }

  componentWillMount() {
    this.getStatus.call(this);
  }

  render(){
    return (
    <div>
      <div>{this.state.lights}</div>
      <button onClick={this.toggleLights.bind(this)}>Toggle Lights
      </button>
    </div>
    )
  }

}


function mapStateToProps (state) {
  return {
    lights: state.lights
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setLights: setLights
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Lights);