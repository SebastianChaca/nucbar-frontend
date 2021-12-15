import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  cartReducer,
  productReducer,
  userReducer,
  sidebarReducer,
  statsReducer,
} from '../Reducers';
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'user'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productReducer,
  stats: statsReducer,
  sidebars: sidebarReducer,
});

export default persistReducer(persistConfig, rootReducer);
