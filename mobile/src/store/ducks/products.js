// ACTION TYPES

export const Types = {
  request: "PRODUCT_REQUEST",
  success: "PRODUCT_SUCCESS",
  failed: "PRODUCT_FAILED"
};

// REDUCER

const INITIAL_STATE = {
  products: [],
  error: false,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.request:
      return { ...state, loading: true };

    case Types.success:
      return {
        ...state,
        products: action.payload.products,
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
  productRequest: () => ({
    type: Types.request,
  }),

  productSuccess: products => ({
    type: Types.success,
    payload: { products }
  }),

  productFailed: () => ({
    type: Types.failed
  })
};
