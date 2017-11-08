import React, { Component } from 'react';
import { cyan500, red500, yellow500, blue500 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  footer: {
    backgroundColor: cyan500,
    paddingTop: 70,
    paddingBottom: 100
  },
  icon: {
    marginRight: 24
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="footer" style={styles.footer}>
        <h2>Everything that has a beginning has an end.</h2>
        <div>
          <FontIcon className="material-icons" style={styles.icon}>home</FontIcon>
          <FontIcon className="material-icons" style={styles.icon} color={red500}>flight_takeoff</FontIcon>
          <FontIcon className="material-icons" style={styles.icon} color={yellow500}>cloud_download</FontIcon>
          <FontIcon className="material-icons" style={styles.icon} color={blue500}>videogame_asset</FontIcon>
          <FontIcon className="material-icons" style={styles.icon} >face</FontIcon>
        </div>
      </div>
    );
  }
}


export default Footer;
