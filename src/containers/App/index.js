import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Home';


import App3 from '../../App';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route path="/" component={Home} />
        <Route path="/app" component={App3} />
      </Layout>
    );
  }
}

export default App;
