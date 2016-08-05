import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
import { applyMiddleware, createStore } from 'redux';
import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactStormpath.init();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>

  , document.getElementById('app'));
