import { put, take, call, fork } from 'redux-saga/effects';
import { types } from '../actions/home';
import Request from '../utils/Request';

function* getHomeInfo(payload = {}) {
  try {
    const homeInfo = yield call(new Request().get, '/home');
    yield put({
      type: types.GET_HOME_INFO_SUCCESS,
      payload: {
        ...homeInfo
      }
    });
    return homeInfo;
  } catch (error) {
    yield put({
      type: types.GET_HOME_INFO_FAIL
    });
  }
}

export function* watchGetHomeInfo() {
  while (true) {
    const { payload } = yield take(types.GET_HOME_INFO);
    yield fork(getHomeInfo, payload);
  }
}
