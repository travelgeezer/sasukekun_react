import React, { Component } from 'react';
import { Layout  } from 'antd';
import Request from './utils/FakeService';
const { Content } = Layout;

const fakeBlogList = [
  {
    title: 'title',
    slug: 'slug',
    abstract: 'abstract',
    raw: 'raw',
    pub_time: 'today',
    update_time: 'tomorrow',
    author: 'author',
    category: 'category',
    tags: ['tag1', 'tag2']
  }
]

class BlogList extends Component {

  fetchData() {
    return fakeBlogList;
  }

  render() {
    const blogs = this.fetchData();
    blogs.map(blog => console.log(blog))
    return (
      <Layout>
        <Content>
          {
            blogs.map(blog => {
              return (
                <div>
                  <h1>{blog.title}</h1>
                  <p>{blog.abstract}</p>
                  <p>{blog.author}</p>
                  <p>{blog.pub_time}</p>
                  <p>{blog.update_time}</p>
                  <p>{blog.category}</p>
                  <p>{blog.raw}</p>
                  <p>{
                      blog.tags.map(tag => <span>{tag}</span>)
                  }</p>
                  </div>
              );
            })
        }
      </Content>
        </Layout>
    );
  }
}

export default BlogList;
