import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MusicPlayer from '../components/music/MusicPlayer';
import Lights from '../components/lights/Lights';
import Todos from '../components/todo/Todo';
import Weather from '../components/weather/Weather';

import ResizableAndMovable from 'react-resizable-and-movable';

const style = {
  textAlign: 'center',
  padding: '20px',
  border: 'solid 3px #fff',
  borderRadius: '5px',
  color: '#fff',
};

const components = [
  { title: 'Music Player',      component: <MusicPlayer />, boot: 'col-xs-6' },
  { title: 'Saved Events',      component: null ,           boot: 'col-xs-6' },
  { title: 'Reminders',         component: null ,           boot: 'col-xs-6' },
  { title: 'Todays Weather',    component: <Weather />,     boot: 'col-xs-6' },
  { title: 'Interests',         component: null ,           boot: 'col-xs-6' },
  { title: 'To-do List',        component: <Todos />,       boot: 'col-xs-6' },
  { title: 'Calendar',          component: null ,           boot: 'col-xs-6' },
  { title: 'Wellness Tracker',  component: null ,           boot: 'col-xs-6' },
  { title: 'Arduino',           component: null ,           boot: 'col-xs-6' },
  { title: 'Lights',            component: <Lights />,      boot: 'col-xs-6' },
  { title: 'Payment Reminders', component: null ,           boot: 'col-xs-6' }
];

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      x: 20,
      y: 20
    }
  }

  render() {
    return (
      <div>
        {
          components.map(comp => {
          return (

            <ResizableAndMovable
              x={this.state.x}
              y={this.state.y}
              width={200}
              height={200}
              style={style}
              minWidth={200}
              minHeight={200}
              maxWidth={800}
              maxHeight={300}
              moveGrid={[20, 20]}
              resizeGrid={[20, 20]}
              >
            <div> { comp.title }
              <div> { comp.component } </div>
            </div>
            </ResizableAndMovable>
            )
          })
        }
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
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

