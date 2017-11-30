import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { App } from './containers';
import configureStore from './store/configure-store';
import rootSaga from './sagas/index';
import Storage from './utils/Storage';
import configs from './configs';
import Main from './main';

injectTapEventPlugin();

const store = configureStore();
store.runSaga(rootSaga);

Storage.setNamespace(configs.storageNameSpace);

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router basename="/">
      <Main />
    </Router>
  </Provider>,
  document.getElementById('main')
);
