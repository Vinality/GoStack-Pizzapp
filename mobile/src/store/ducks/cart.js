// ACTION TYPES

export const Types = {
  addorder: "ADDORDER_REQUEST",
  failed: "ADDORDER_FAILED"
};

// REDUCER

const INITIAL_STATE = {
  orders: [],
  error: false
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {

    case Types.addorder:
      return { orders: [...state.orders, action.payload.size_id] };

    case Types.failed:
      return { ...state, error: true };

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

  cartFailed: () => ({
    type: Types.failed
  }),
};
