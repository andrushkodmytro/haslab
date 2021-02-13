import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import auth from 'utils/auth';
// import { SIGN_IN_PATH } from 'utils/constants';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        // auth.isAuthenticated()

        localStorage.getItem('auth') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};
