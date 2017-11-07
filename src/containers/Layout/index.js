import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import className from 'classnames';
import * as homeActions from '../../actions/home';
import './layout.less';


class Layout extends Component {

  onLogout() {}

  onGoHome() {
    window.location.href = '/';
  }

  getTitle() {
    return 'title';
  }

  render() {
    return (
      <div className="layout">
        <div><p>navbar</p></div>
        <div><p>logo</p></div>
        <div style={{color: 'red'}}>
          <p>menu</p>
          <ul>
            <li>
              <Link to="/">to home</Link>
            </li>
            <li>
              <Link to="/app">to app</Link>
            </li>
          </ul>
        </div>
        <div className="layout-title"></div>
        <div className="layout-container">
          {this.props.children}
        </div>
        <div><p>footer</p></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
