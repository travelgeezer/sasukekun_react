import React, { Component } from 'react';
import './home.less';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 210,
    paddingBottom: 210
  }
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="home" style={styles.container}>
        <h1>home</h1>
      </div>
    );
  }
}

export default Home;
