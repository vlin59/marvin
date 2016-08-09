import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const comps = [
  'interests', 'calendar', 'todo', 'fitbit', 'weather'
]

class Dashboard extends React.Component{
  constructor (props) {
    super(props);
  }

  render() {
    return(
      <div>
        {
          comps.map(comp => <div class={comp}>{comp}</div>)
        }
      </div>
    )
  }
};

function mapStateToProps (state) {
  return {
    dashboard: state
  };
};

export default connect(mapStateToProps)(Dashboard);