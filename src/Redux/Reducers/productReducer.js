import { GET_PRODUCTS } from '../Actions/prodcutsActions';

const INITIAL_STATE = {
  products: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
