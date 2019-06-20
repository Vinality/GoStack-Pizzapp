// ACTION TYPES

export const Types = {
  addorder: "ADDORDER_REQUEST",
  request: "CART_REQUEST",
  success: "CART_SUCCESS",
  failed: "CART_FAILED"
};

// REDUCER

const INITIAL_STATE = {
  orders: [],
  error: false,
  loading: false
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.request:
      return { ...state, loading: true };

    case Types.addorder:
      return { orders: [...state.orders, action.payload.size_id], loading: true };

    case Types.success:
      return {
        ...state,
        orders: action.payload.orders,
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
  addOrderRequest: size_id => ({
    type: Types.addorder,
    payload: { size_id }
  }),

  cartRequest: () => ({
    type: Types.request,
  }),

  cartSuccess: orders => ({
    type: Types.success,
    payload: { orders }
  }),

  cartFailed: () => ({
    type: Types.failed
  })
};
