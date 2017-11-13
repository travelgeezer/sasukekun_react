import React, { Component } from 'react';
import { cyan500 } from 'material-ui/styles/colors';
import { LinkGithub } from '../components';


import './footer.less';



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
      <div id="footer">
        <div className="box-top">
          <div className="box-left">
            <h2 className="headline">Everything that has a beginning has an end.</h2>
          </div>
          <div className="box-right">
            <h2 className="headline">
              <LinkGithub />
            </h2>
          </div>
        </div>
      </div>
    );
  }
}


export default Footer;
