import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import { App } from './containers';
import configureStore from './store/configure-store';
import rootSaga from './sagas/index';

const store = configureStore();
store.runSaga(rootSaga);

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router basename="/" >
      <App />
    </Router>
  </Provider>,
  document.getElementById('main')
)
