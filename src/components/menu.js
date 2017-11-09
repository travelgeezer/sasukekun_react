import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
      <Drawer
        docked={false}
        width={200}
        open={this.props.open}
        onRequestChange={this.onRequestChange.bind(this)}
        >
        <MenuItem onClick={this.handleClose.bind(this)}>
          <Link to="/">home</Link>
        </MenuItem>
        <MenuItem onClick={this.handleClose.bind(this)}>
          <Link to="/t2">t2</Link>
        </MenuItem>
      </Drawer>
    );
  }
}

export default Menu;
