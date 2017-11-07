import { fork, all } from 'redux-saga/effects';

import * as home from './home';
import * as blog from './blog';

export default function* rootSaga() {
  yield all([
    fork(home.watchGetHomeInfo),

    fork(blog.watchCreateBlog),
    fork(blog.watchGetBlogList)
  ]);
}
