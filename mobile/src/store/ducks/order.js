// ACTION TYPES

export const Types = {
  request: "ORDER_REQUEST",
  success: "ORDER_SUCCESS",
  failed: "ORDER_FAILED"
};

// REDUCER

const INITIAL_STATE = {
  orders: [],
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.request:
      return { ...state };

    case Types.success:
      return {
        ...state,
        orders: action.payload.orders,
      };

    case Types.failed:
      return { ...state };

    default:
      return state;
  }
}

// ACTIONS CREATORS

export const Creators = {
  getOrderRequest: () => ({
    type: Types.request,
  }),

  orderSuccess: orders => ({
    type: Types.success,
    payload: { orders }
  }),

  orderFailed: () => ({
    type: Types.failed
  })
};
