import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input, Button } from 'antd';
import * as blogActions from '../../actions/blog';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 }
};

class CreateBlog extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onCreateBlog(e) {
    e.preventDefault();
        this.props.form.validateFields((err, values) => {
      if (!err) {
        values.slug = values.title;
        values.tags = [values.tags];
        this.props.blogActions.createBlog({data: values});
      }
    });

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h1>create blog.</h1>
        <Form onSubmit={this.onCreateBlog.bind(this)}>
          <FormItem
            label="title"
            {...formItemLayout}
            >
            {getFieldDecorator('title', {
              rules: [{required: true}]
            })(<Input placeholder="blog title" />)}
      </FormItem>
        <FormItem
      label="abstract"
      {...formItemLayout}
        >
        {getFieldDecorator('abstract', {
          rules: [{required: true}]
        })(<Input placeholder="blog abstract" />)}
      </FormItem>
        <FormItem
      label="raw"
      {...formItemLayout}
        >
        {getFieldDecorator('raw', {
          rules: [{required: true}]
        })(<Input placeholder="blog raw" />)}
      </FormItem>
        <FormItem
      label="author"
      {...formItemLayout}
        >
        {getFieldDecorator('author', {
          rules: [{required: true}]
        })(<Input placeholder="blog author" />)}

      </FormItem>
        <FormItem
      label="category"
      {...formItemLayout}
        >
        {getFieldDecorator('category', {
          rules: [{required: true}]
        })(<Input placeholder="blog category" />)}

      </FormItem>
        <FormItem
      label="tags"
      {...formItemLayout}
        >
        {getFieldDecorator('tags', {
          rules: [{required: true}]
        })(<Input placeholder="blog tags" />)}

      </FormItem>
        <FormItem>
        <Button type="primary" htmlType="submit">save</Button>
      </FormItem>
      </Form>
        </div>
    );
  }
}

CreateBlog = Form.create()(CreateBlog);

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
