import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const comps = [
  { title: 'saved_events',      component: '' },
  { title: 'reminders',         component: '' },
  { title: 'weather',           component: '' },
  { title: 'interests',         component: '' },
  { title: 'todo',              component: '' },
  { title: 'calendar',          component: '' },
  { title: 'wellness_tracker',  component: '' },
  { title: 'arduino',           component: '' },
  { title: 'payment_reminders', component: '' }
]

class Dashboard extends React.Component{
  constructor (props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Dashboard</h1>
        <div class='marvin'>Marvin</div>
        {
          comps.map(comp => <div class={comp.title}>{comp.title}</div>)
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