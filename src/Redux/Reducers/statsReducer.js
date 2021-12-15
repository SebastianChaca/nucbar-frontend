import { GET_PRODUCTS_STATS } from '../Actions/statsActions';

const INITIAL_STATE = {
  productsStats: null,
};

const statsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_STATS:
      return {
        ...state,
        productsStats: {
          stats: action.payload.data.stats,
          total: action.payload.results,
          status: action.payload.status,
        },
      };
    default:
      return state;
  }
};

export default statsReducer;
