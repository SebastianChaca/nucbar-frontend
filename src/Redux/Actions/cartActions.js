export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';
export const SET_ITEM = 'SET_ITEM';
export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
export const setItems = (item, quantity) => ({
  type: SET_ITEM,
  payload: { item, quantity },
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
export const getTotals = () => ({
  type: GET_TOTALS,
});
