import { authConstants } from '../consts';

const initialState = { authenticated: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        authenticated: true,
      };
    default:
      return state;
  }
}
