import React, { Component } from 'react';

import './style.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="footer">
        <div className="box-top">
          <div className="box-left">
            <h2 className="headline">
              Everything that has a beginning has an end.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
