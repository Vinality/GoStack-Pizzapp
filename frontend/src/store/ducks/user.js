export const Types = {
  LOGIN_REQUEST: "users/LOGIN_REQUEST",
  LOGIN_SUCCESS: "users/LOGIN_SUCCESS",
  LOGIN_FAILURE: "users/LOGIN_FAILURE",
  LOGOUT: "users/LOGOUT"
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
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.error
      };
    case Types.LOGOUT:
      return {
        ...state,
        name: '',
      }
    default: return state;
  }
}

export const Creators = {
  userLoginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password }
  }),

  userLoginSuccess: username => ({
    type: Types.LOGIN_SUCCESS,
    payload: { username }
  }),

  userLoginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  }),

  userLogout: () => ({
    type: Types.LOGOUT,
  })
};
