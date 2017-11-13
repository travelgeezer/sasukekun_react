import React, { Component } from 'react';
import { Drawer, MenuItem, FontIcon } from 'material-ui';
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

  renderHomeIcon() {
    return <FontIcon className="material-icons" >home</FontIcon>;
  }

  renderUploadIcon() {
    return <FontIcon className="material-icons">cloud_upload</FontIcon>

  }

  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.props.open}
        onRequestChange={this.onRequestChange.bind(this)}
        >
        <Link to="/">
          <MenuItem
            primaryText="Home"
            onClick={this.handleClose.bind(this)}
            leftIcon={this.renderHomeIcon()}
            />
        </Link>
        <Link to="/upload">
          <MenuItem
            primaryText="Upload"
            onClick={this.handleClose.bind(this)}
            leftIcon={this.renderUploadIcon()}
            />
        </Link>
      </Drawer>
    );
  }
}

export default Menu;
