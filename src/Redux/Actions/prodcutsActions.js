export const GET_PRODUCTS = 'GET_PRODUCTS';

export const fetchProducts = products => ({
  type: GET_PRODUCTS,
  payload: products,
});
