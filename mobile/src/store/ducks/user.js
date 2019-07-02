// ACTION TYPES

export const Types = {
  request: "LOGIN_REQUEST",
  signup: "SIGNUP_REQUEST",
  signupsuccess: "SIGNUP_SUCCESS",
  success: "USER_SUCCESS",
  failed: "USER_FAILED"
};

// REDUCER

const INITIAL_STATE = {
  username: null,
  error: null,
  loading: false
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.request:
      return { ...state, loading: true };

    case Types.success:
      return {
        ...state,
        username: action.payload.username,
        loading: false
      };

    case Types.signupsuccess:
      return {
        ...state,
        error: null,
        loading: false
      }

    case Types.failed:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };

    default:
      return state;
  }
}

// ACTIONS CREATORS

export const Creators = {
  loginRequest: (username, password) => ({
    type: Types.request,
    payload: { username, password }
  }),

  signupRequest: (username, email, password) => ({
    type: Types.signup,
    payload: { username, email, password}
  }),

  signupSuccess: () => ({
    type: Types.signupsuccess,
    payload: {}
  }),

  userSuccess: username => ({
    type: Types.success,
    payload: { username }
  }),

  userFailed: error => ({
    type: Types.failed,
    payload: { error }
  })
};
