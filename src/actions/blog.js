export const types = {
  CREATE_BLOG: 'CREATE_BLOG',
  CREATE_BLOG_SUCCESS: 'CREATE_BLOG_SUCCESS',
  CREATE_BLOG_FAIL: 'CREATE_BLOG_FAIL',

  GET_BLOG_LIST: 'GET_BLOG_LIST',
  GET_BLOG_LIST_SUCCESS: 'GET_BLOG_LIST_SUCCESS',
  GET_BLOG_LIST_FAIL: 'GET_BLOG_LIST_FAIL',
};

export function createBlog(payload) {
  return {
    type: types.CREATE_BLOG,
    payload
  };
}

export function getBlogList(payload) {
  return {
    type: types.GET_BLOG_LIST,
    payload
  };
}
