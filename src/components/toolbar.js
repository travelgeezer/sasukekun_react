import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { greenA700, redA400 } from 'material-ui/styles/colors';

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <FontIcon className="material-icons" onClick={this.handleToggle}>menu</FontIcon>
          </ToolbarGroup>
          <ToolbarGroup>
            <div>Everything that has a beginning has an end</div>
          </ToolbarGroup>
          <ToolbarGroup>
            <FontIcon className="material-icons" hoverColor={redA400} style={{fontSize: 12}}>favorite</FontIcon>
            <FontIcon className="material-icons" hoverColor={greenA700} style={{fontSize: 12}}>android</FontIcon>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
