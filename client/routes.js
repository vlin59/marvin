import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import MainPage from './components/main';
import EventsPage from './containers/EventsPage';

export default(
  <Route path='/' component={MainPage}>
    <IndexRoute component={EventsPage}/>
  </Route>
  )