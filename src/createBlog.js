import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class CreateBlog extends Component {

  createBlog() {
    console.log('create a blog')
  }

  render() {
    return (
      <Form onSubmit={this.createBlog.bind(this)}>
        <FormItem>
          <Input placeholder="title" />
        </FormItem>
        <FormItem>
          <Input placeholder="abstract" />
        </FormItem>
        <FormItem>
          <Input placeholder="raw" />
        </FormItem>
        <FormItem>
          <Input placeholder="author" />
        </FormItem>
        <FormItem>
          <Input placeholder="category" />
        </FormItem>
        <FormItem>
          <Input placeholder="tags" />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            >
            create blog
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default CreateBlog;
