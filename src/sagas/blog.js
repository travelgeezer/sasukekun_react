import { put, take, call, fork } from 'redux-saga/effects';
import { types } from '../actions/blog';
import Api from '../utils/Request';
import Message from '../utils/Message';

function* createBlog(payload = {}) {
  const { data } = payload;

  try {
    console.log(new Api());
    const blog = yield call(new Api().post, '/posts/', {
      formJson: true,
      data
    });
    yield put({
      type: types.CREATE_BLOG_SUCCESS,
      payload: blog
    });
    return blog;
  } catch (error) {
    Message.error(error);
    yield put({ type: types.CREATE_BLOG_FAIL });
  }
}

export function* watchCreateBlog() {
  while (true) {
    const { payload } = yield take(types.CREATE_BLOG);
    yield fork(createBlog, payload);
  }
}

function* getBlogList(payload) {
  try {
    const blogList = yield call(new Api().get, '/posts/');
    yield put({
      type: types.GET_BLOG_LIST_SUCCESS,
      payload: blogList
    });
    return blogList;
  } catch (error) {
    Message.error(error);
    yield put({ type: types.GET_BLOG_LIST_FAIL });
  }
}

export function* watchGetBlogList() {
  while (true) {
    const { payload } = yield take(types.GET_BLOG_LIST);
    yield fork(getBlogList, payload);
  }
}
