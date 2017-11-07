import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Home';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route path="/" component={Home} />
      </Layout>
    );
  }
}

export default App;
