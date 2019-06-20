// ACTION TYPES

export const Types = {
  request: "SIZE_REQUEST",
  success: "SIZE_SUCCESS",
  failed: "SIZE_FAILED"
};

// REDUCER

const INITIAL_STATE = {
  sizes: [],
  error: false,
};

export default function size(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.request:
      return { ...state, loading: true };

    case Types.success:
      return {
        ...state,
        sizes: action.payload.sizes,
        error: false,
      };

    case Types.failed:
      return { ...state, error: true };

    default:
      return state;
  }
}

// ACTIONS CREATORS

export const Creators = {
  sizeRequest: id => ({
    type: Types.request,
    payload: { id }
  }),

  sizeSuccess: sizes => ({
    type: Types.success,
    payload: { sizes }
  }),

  sizeFailed: () => ({
    type: Types.failed
  })
};
