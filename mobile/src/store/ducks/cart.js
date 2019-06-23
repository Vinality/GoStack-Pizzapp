// ACTION TYPES

export const Types = {
  addorder: "ADDORDER_REQUEST",
  removeorder: "REMOVE_REQUEST",
  failed: "ADDORDER_FAILED",
  getcart: "GETCART_REQUEST",
  success: "GETCART_SUCCESS"
};

// REDUCER

const INITIAL_STATE = {
  orders: [],
  cart: [],
  total: 0,
  error: false
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {

    case Types.addorder:
      return { orders: [...state.orders, action.payload.size_id] };

    case Types.removeorder:
      const index = state.orders.indexOf(action.payload.size_id);
      const posObj = state.cart.map(function(e) { return e.id; }).indexOf(action.payload.size_id);
      const newTotal = state.total - state.cart[posObj].price;
      state.orders.splice(index, 1);
      state.cart.splice(posObj, 1);

      return { ...state, total: newTotal };

    case Types.getcart:
      return { ...state };

    case Types.failed:
      return { ...state, error: true };

    case Types.success:
      return { ...state, cart: action.payload.cart, total: action.payload.total };

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

  removeOrderRequest: size_id => ({
    type: Types.removeorder,
    payload: { size_id }
  }),

  cartFailed: () => ({
    type: Types.failed
  }),

  getCart: orders => ({
    type: Types.getcart,
    payload: orders
  }),

  getCartSuccess: (cart, total) => ({
    type: Types.success,
    payload: { cart, total }
  }),
};
