import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../../Components/Ui/Footer/Footer';

import NavBar from '../../Components/Ui/Navbar/Navbar';
export const Layout = ({ children }) => {
  return (
    <Switch>
      <Route>
        <NavBar />

        {children}
        <Footer />
      </Route>
    </Switch>
  );
};
