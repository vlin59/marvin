import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import MainPage from './components/main';


export default (
  <Route path='/' component={MainPage}>
    <IndexRoute component={}/>
    <Route path= '' component={} />
  </Route>
  )