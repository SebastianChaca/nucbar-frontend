import React from 'react';
import { Switch } from 'react-router-dom';

import { privateRoutes } from '../Routes';
import PrivateRouteComponent from './PrivateRouteComponent';
const Private = () => {
  const mapRoutes = routes => {
    return routes.map(route => {
      return (
        <PrivateRouteComponent key={route.id} path={route.path}>
          {route.component}
        </PrivateRouteComponent>
      );
    });
  };

  return <Switch>{mapRoutes(privateRoutes)}</Switch>;
};
export default Private;
