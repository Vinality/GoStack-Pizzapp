export const Types = {
  LOGIN_REQUEST: "users/LOGIN_REQUEST",
  LOGIN_SUCCESS: "users/LOGIN_SUCCESS",
  LOGIN_FAILURE: "users/LOGIN_FAILURE",
};

export default function users(state = {}, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.username
      }
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.error
      };
    default: return state;
  }
}

export const Creators = {
  UserLoginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password }
  }),

  UserLoginSuccess: username => ({
    type: Types.LOGIN_SUCCESS,
    payload: { username }
  }),

  UserLoginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  }),
};
