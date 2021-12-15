import {
  Switch,
  Route,
  useRouteMatch,
  BrowserRouter as Router,
} from 'react-router-dom';
import React from 'react';
import {
  UserData,
  UpdatePassword,
  DashSidebar,
} from '../../Components/UserDashboard';

const UserDashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${path}/configuration`}>
          <UserData url={url} />
        </Route>
        <Route path={`${path}/updatepassword`}>
          <UpdatePassword url={url} />
        </Route>
        <Route path={`${path}/updatename`}>
          <h1>Actualizar nombre</h1>
        </Route>
      </Switch>
      <DashSidebar url={url} />
    </Router>
  );
};

export default UserDashboard;
