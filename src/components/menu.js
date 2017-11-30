import React, { Component } from 'react';
import {} from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onRequestChange(open) {
    if (this.props.onRequestChange) {
      this.props.onRequestChange(open);
    }
  }

  handleClose(event, index, value) {
    if (this.props.handleClose) {
      this.props.handleClose(event, index, value);
    }
  }

  render() {
    return (
      <div>
        <h1>menu</h1>
      </div>
    );
  }
}

export default Menu;
