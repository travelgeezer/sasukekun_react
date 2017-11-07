import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/blog';

class CreateBlog extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('create blog:');
    console.log(this.props);
    return (
      <div>
        <h1>create blog.</h1>
        <p>{JSON.stringify(this.props)}</p>
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
