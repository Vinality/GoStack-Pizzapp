// ACTION TYPES

export const Types = {
  request: "TYPE_REQUEST",
  success: "TYPE_SUCCESS",
  failed: "TYPE_FAILED"
};

// REDUCER

const INITIAL_STATE = {
  types: [],
  error: false,
  loading: false
};

export default function type(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.request:
      return { ...state, loading: true };

    case Types.success:
      return {
        ...state,
        types: action.payload.types,
        error: false,
        loading: false
      };

    case Types.failed:
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
}

// ACTIONS CREATORS

export const Creators = {
  typeRequest: id => ({
    type: Types.request,
    payload: { id }
  }),

  typeSuccess: (types) => ({
    type: Types.success,
    payload: { types }
  }),

  typeFailed: () => ({
    type: Types.failed
  })
};
