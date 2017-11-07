import { put, take, call, fork } from 'redux-saga/effects';
import { types } from '../actions/blog';
import Reqeust from '../utils/Request';

function* createBlog(payload = {}) {
  const { data } = payload;

  try {
    const blog = yield call(new Request().post,
                            '/posts',
                            {
                              formJson: true,
                              data
                            });
    yield put({
      type: types.CREATE_BLOG_SUCCESS,
      payload: blog
    });
    return blog;
  }catch (error) {
    yield put({type: types.CREATE_BLOG_FAIL});
  }
}

export function* watchCreateBlog() {
  while (true) {
    const { pyaload } = yield take(types.CREATE_BLOG);
    yield fork(createBlog, payload);
  }
}

function* getBlogList(payload) {
  const {}  = payload;
  try {
    const blogList = yield call(new Request().get, '/posts');
    yield put({
      type: types.GET_BLOG_LIST_SUCCESS,
      payload: blogList
    });
    return blogList;
  } catch (error) {
    yield put({type: types.GET_BLOG_LIST_FAIL});
  }
}

export function* watchGetBlogList() {
  while (true) {
    const { payload } = yield take(types.GET_BLOG_LIST);
    yield fork(getBlogList, payload);
  }
}
