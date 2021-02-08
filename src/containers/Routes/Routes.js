import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'page/Login';
import SignUp from 'page/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={SignUp} />
    </Switch>
  );
}
