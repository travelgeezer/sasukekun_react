import { types } from '../actions/register';

const initialState = {};

export default function register(state = initialState, action = {}) {
  const { payload } = action;

  switch (action.type) {
    case types.REGISTER_USER:
      return {
        ...state
      };

    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: payload
      };

    case types.REGISTER_USER_FAIL:
      return {
        ...state
      };

    default:
      return state;
  }
}
