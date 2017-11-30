import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import './app.less';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </div>
    );
  }
}

export default App;
