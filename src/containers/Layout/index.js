import React, { Component } from 'react';
import './layout.less';

class Layout extends Component {
  render() {
    return (
      <div class="layout">
        {this.props.children}
      </div>

    );
  }
}

export default Layout;
