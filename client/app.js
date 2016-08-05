import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
import { applyMiddleware, createStore } from 'redux';
import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactStormpath.init({
  // Optional: Set if you want to use your own dispatcher or configure one such as 'redux'.
  // When no dispatcher is set, the default is 'flux'.
  dispatcher: {
    // Optional: Can either be 'flux' or 'redux'. Defaults to 'flux'.
    type: 'redux',

    // Required when you use type 'redux'.
    // The store that you wish to dispatch events to.
    store: createStoreWithMiddleware(reducers)
  },

  // Optional: If your are running our framework integration
  // (e.g. express-stormpath) on a different domain, or you have
  // changed the default endpoints in the framework integration.
  // Values shown are the defaults.
  endpoints: {
    baseUri: null, // E.g. https://api.example.com
    me: '/me',
    login: '/login',
    register: '/register',
    verifyEmail: '/verify',
    forgotPassword: '/forgot',
    changePassword: '/change',
    logout: '/logout'
  }
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>

  , document.getElementById('app'));
