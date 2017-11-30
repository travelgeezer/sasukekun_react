import { types } from '../actions/home';

const initialState = {};

export default function home(state = initialState, action = {}) {
  const { payload } = action;

  switch (action.type) {
    case types.GET_HOME_INFO:
      return {
        ...state
      };

    case types.GET_HOME_INFO_SUCCESS:
      return {
        ...state
      };

    case types.GET_HOME_INFO_FAIL:
      return {
        ...state
      };

    default:
      return state;
  }
}
