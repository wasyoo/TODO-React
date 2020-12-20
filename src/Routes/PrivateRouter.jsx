import React, { useContext } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { AuthContext } from 'context/Auth.context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isConnect } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => (
        isConnect
          ? (
            <Component {...props} />
          )
          : <Redirect to='/' />
      )}
    />
  )
}

export default PrivateRoute;