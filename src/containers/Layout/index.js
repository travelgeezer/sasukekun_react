import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import * as homeActions from '../../actions/home';
import Home from '../Home';
import CreateBlog from '../Blog/createBlog';
import { FileUpload } from '../upload';
import User from '../User';
import { Toolbar, Footer } from '../../components';
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
        <Toolbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog/create" component={CreateBlog} />
            <Route path="/upload" component={FileUpload} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
