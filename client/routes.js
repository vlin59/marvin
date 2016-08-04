import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';

export default (
  <Route path='/' component={}>
    <IndexRoute component={}/>
    <Route component={} />
  </Route>
  )