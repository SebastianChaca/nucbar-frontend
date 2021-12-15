import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { publicRoutes } from '../Routes';
export const Public = () => {
  const currentUser = useSelector(state => state.user.token);
  const mapRoutes = routes => {
    return routes.map(route => {
      if (route.path === '/login') {
        return (
          <Route key={route.id} exact path={route.path}>
            {currentUser ? <Redirect to="/" /> : route.component}
          </Route>
        );
      } else {
        return (
          <Route key={route.id} exact path={route.path}>
            {route.component}
          </Route>
        );
      }
    });
  };

  return <Switch>{mapRoutes(publicRoutes)}</Switch>;
};
