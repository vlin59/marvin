import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ResultsYelpPageEntry from '../components/results/ResultsYelpPageEntry';
const Loader = require('react-loader');



class ResultsYelpPage extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillMount() {
    console.log("We're here!");
    this.setState({
      loaded: false
    });
  }



  componentWillReceiveProps(){
    this.setState({
      loaded: true
    });
  }

  render(){

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
    return(
      <div className="container">
       <Loader loaded={this.state.loaded} options={options} className="spinner" />
        {this.props.venues.map((venue)=>
            <ResultsYelpPageEntry venue={venue} />
          )}
      </div>
      )
  }

}

function mapStateToProps (state) {
  return {
    venues: state.venues,
    events: state.events,
    movies: state.movies
  };
};


export default connect(mapStateToProps)(ResultsYelpPage);