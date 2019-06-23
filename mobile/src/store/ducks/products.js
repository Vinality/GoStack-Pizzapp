// ACTION TYPES

export const Types = {
  request: "PRODUCT_REQUEST",
  success: "PRODUCT_SUCCESS",
  failed: "PRODUCT_FAILED",
  updatecurrent: "PRODUCT_CURRENT"
};

// REDUCER

const INITIAL_STATE = {
  currentProd: null,
  products: [],
  error: false,
  loading: false,
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
        loading: false
      };

    case Types.failed:
      return { ...state, error: true, loading: false };

    case Types.updatecurrent:
      return { ...state, error: false, loading: false, currentProd: action.payload.id };

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
  }),

  setCurrentProd: (id) => ({
    type: Types.updatecurrent,
    payload: { id }
  })
};
