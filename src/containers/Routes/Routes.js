import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'page/Login';
import SignUp from 'page/SignUp';
import Account from 'page/Account';
import {PrivateRoute} from 'components/PrivateRoute'

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path='/account' component={Account}/>
      <Route path='/login' component={Login} />
      <Route path='/register' component={SignUp} />
    </Switch>
  );
}
