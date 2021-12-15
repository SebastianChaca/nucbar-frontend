import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  GET_TOTALS,
  SET_ITEM,
} from '../Actions/cartActions';

import {
  addItemToCart,
  removeItemFromCart,
  getTotals,
  setItemToCart,
} from '../Utils/cartUtils';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        cartItems: setItemToCart(
          state.cartItems,
          action.payload.item,
          action.payload.quantity
        ),
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case GET_TOTALS:
      return {
        ...state,
        totals: getTotals(state.cartItems),
      };
    default:
      return state;
  }
};

export default cartReducer;
