import { authConstants } from './consts';

function login(username) {
  return (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST, username });
  };
}

export const userActions = {
  login,
};
