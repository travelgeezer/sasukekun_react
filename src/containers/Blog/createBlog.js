import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/blog';

class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onCreateBlog() {}

  render() {
    return (
      <div>
        <h1>create blog.</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blog: state.blog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    blogActions: bindActionCreators(blogActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);
