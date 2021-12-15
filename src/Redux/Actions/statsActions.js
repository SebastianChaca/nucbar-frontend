export const GET_PRODUCTS_STATS = 'GET_PRODUCTS_STATS';

export const getProductsStats = stats => ({
  type: GET_PRODUCTS_STATS,
  payload: stats,
});
