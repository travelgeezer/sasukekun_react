import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as registerActions from '../../actions/register';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }

  register(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.registerActions.register({
      data: this.state
    });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.register.bind(this)}>
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <label>{this.state.name}</label>
          </div>
          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <label>{this.state.password}</label>
          </div>
          <div>
            <button type="submit">register</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    register: state.register
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerActions: bindActionCreators(registerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
