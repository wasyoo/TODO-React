import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRouter';
import Login from 'pages/Login';
import Todo from 'pages/Todo';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/todo" exact component={Todo} />
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;