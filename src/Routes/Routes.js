import { v4 as uuidv4 } from 'uuid';
import Home from '../Pages/Home/Home.jsx';
import Login from '../Pages/Session/Login.jsx';
import NotFound from '../Pages/NotFound/NotFound.jsx';
import Products from '../Pages/Products/Products.jsx';
import Product from '../Pages/Product/Product.jsx';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart.jsx';
import UserDashboard from '../Pages/UserDashboard/UserDashboard.jsx';
import Checkout from '../Pages/Checkout/Checkout.jsx';
export const publicRoutes = [
  {
    id: uuidv4(),
    exact: true,
    path: '/',
    component: <Home />,
  },
  {
    id: uuidv4(),
    exact: false,
    path: '/login',
    component: <Login />,
  },
  {
    id: uuidv4(),
    exact: false,
    path: '/products',
    component: <Products />,
  },
  {
    id: uuidv4(),
    exact: false,
    path: '/product/:id',
    component: <Product />,
  },
  {
    id: uuidv4(),
    exact: false,
    path: '/cart',
    component: <ShoppingCart />,
  },
  //TODO: si separo en rutas privadas y publicas tengo que agregar el nombre de las rutas
  // que uso en la parte publica si no el 404 no funciona bien.
  //pensar si junto todo en un array u otra manera de hacerlo
  {
    id: uuidv4(),
    path: '/user',
    private: true,
  },
  // {
  //   id: uuidv4(),
  //   exact: false,
  //   path: '*',
  //   component: <NotFound />,
  // },
];
export const privateRoutes = [
  {
    id: uuidv4(),
    path: '/user',
    component: <UserDashboard />,
  },
  {
    id: uuidv4(),
    path: '/checkout',
    component: <Checkout />,
  },
];
