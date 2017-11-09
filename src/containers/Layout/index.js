import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Link, Switch } from 'react-router-dom';
import className from 'classnames';
import * as homeActions from '../../actions/home';
import Home from '../Home';
import CreateBlog from '../Blog/createBlog';
import Toolbar from '../../components/toolbar';
import Footer from '../../components/footer';
import './layout.less';


class T24 extends Component {
  render = () => (<div><p>t22222</p></div>);
}

class T extends Component {
  constructor(porps) {
    super(props);
    this.state = {}
  }
}

class T2 extends Component {
  render() {
    return (
      <div className="t2">
        <p>t2</p>
        <Switch>
          <Route path="/t2/t3" component={T3} />
          <Route path="/t2/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

class T3 extends Component {
  render() {
    return <div><p>t3</p></div>
  }
}


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
            <Route path="/t2" component={T2} />
            <Route path="/t3" component={T3} />
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
