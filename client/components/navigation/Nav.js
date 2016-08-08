import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import NavUser from './NavUser';
import NavGuest from './NavGuest';
import { Authenticated, NotAuthenticated } from 'react-stormpath';


class Nav extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>

        <NotAuthenticated>
            <NavGuest />
          </NotAuthenticated>


        <Authenticated>
            <NavUser />
        </Authenticated>

      </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  };
};


export default connect(mapStateToProps)(Nav);

