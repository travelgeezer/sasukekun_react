export const types = {
  REGISTER_USER: 'REGISTER_USER',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAIL: 'REGISTER_USER_FAIL'
};

export function register(payload) {
  return {
    type: types.REGISTER_USER,
    payload
  };
}
