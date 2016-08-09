import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import MainPage from './components/main/main';
import EventsPage from './containers/EventsPage';
import RegistrationPage from './components/auth/RegistrationPage';
import LoginPage from './components/auth/LoginPage';
import { LogoutRoute } from 'react-stormpath';
import ResultsPage from './containers/ResultsPage';
import Dashboard from './containers/Dashboard';

export default(
  <Route path='/' component={MainPage}>
    <IndexRoute component={EventsPage}/>
    <Route path ='register' component ={RegistrationPage} />
    <Route path ='login' component ={LoginPage} />
    <Route path ='results' component ={ResultsPage}/>
    <Route path ='dashboard' component ={Dashboard}/>
    <LogoutRoute path = 'logout' />
  </Route>
  )