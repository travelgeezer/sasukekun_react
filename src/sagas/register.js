import { put, take, call, fork } from 'redux-saga/effects';
import { types } from '../actions/register';
import Api from '../utils/Request';
import Message from '../utils/Message';

function* register(payload = {}) {
  const { data } = payload;
  try {
    const user = yield call(new Api().post, '/v1/user/', {
      formJson: true,
      data
    });
    yield put({
      type: types.REGISTER_USER_SUCCESS,
      payload: user
    });
  } catch (e) {
    Message.error(e);
    yield put({
      type: types.REGISTER_USER_FAIL
    });
  }
}

export function* watchRegister() {
  while (true) {
    const { payload } = yield take(types.REGISTER_USER);
    yield fork(register, payload);
  }
}
