import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Home';
import './app.less';

class EmptyView extends Component {
  render = () => <div><p>empty view</p></div>;
}

class Login extends Component {
  render = () => <div><p>login view</p></div>
}

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route path="/404" component={EmptyView} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </div>
    );
  }
}

export default App;
