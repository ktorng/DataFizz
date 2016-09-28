import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';
import Login from './components/auth/login';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Login} />
          <Route path="dashboard" component={Dashboard} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
