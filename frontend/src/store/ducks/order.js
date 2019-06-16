export const Types = {
  ORDER_REQUEST: "users/ORDER_REQUEST",
  ORDER_SUCCESS: "users/ORDER_SUCCESS",
  ORDER_FAILURE: "users/ORDER_FAILURE",
};

export default function order(state = {}, action) {
  switch (action.type) {
    case Types.ORDER_REQUEST:
      return {
        ...state
      };
    case Types.ORDER_SUCCESS:
      return {
        orders: action.payload.orders
      }
    case Types.ORDER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.error
      };
    default: return state;
  }
}

export const Creators = {
  GetOrdersRequest: () => ({
    type: Types.ORDER_REQUEST,
    payload: {}
  }),

  GetOrdersSuccess: orders => ({
    type: Types.ORDER_SUCCESS,
    payload: { orders }
  }),

  GetOrdersFailure: error => ({
    type: Types.ORDER_FAILURE,
    payload: { error }
  }),
};
