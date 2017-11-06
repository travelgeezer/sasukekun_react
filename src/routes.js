import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Layout, Home } from './containers';

export default store => {
  return (
    <Route component={App}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
      </Route>
    </Route>
  );
}
