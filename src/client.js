import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { useBasename } from 'history';
import createRoutes from './routes';
import configureStore from './store/configure-store';
import rootSaga from './sagas/index';

const store = configureStore();
store.runSaga(rootSaga);

const routes = createRoutes(store);
let history = browserHistory;
console.log(browserHistory)
if (process.env.NODE_ENV !== 'development') {
  history = useBasename(() => browserHistory)({
    basename: '/'
  });
}

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('main')
)
