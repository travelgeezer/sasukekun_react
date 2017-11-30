import { types } from '../actions/blog';

const initialState = {};

export default function blog(state = initialState, action = {}) {
  const { payload } = action;

  switch (action.type) {
    case types.CREATE_BLOG:
      return {
        ...state
      };
    case types.CREATE_BLOG_SUCCESS:
      return {
        ...state
      };
    case types.CREATE_BLOG_FAIL:
      return {
        ...state
      };
    case types.GET_BLOG_LIST:
      return {
        ...state
      };
    case types.GET_BLOG_LIST_SUCCESS:
      return {
        ...state
      };
    case types.GET_BLOG_LIST_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
