import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'page/Login';
import SignUp from 'page/SignUp';
import Account from 'page/Account';
import Search from 'page/Search';
import Company from 'page/Company';
import CompanyCreate from 'page/CompanyCreate';
import { PrivateRoute } from 'components/PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={SignUp} />
      <PrivateRoute path='/account' component={Account} />
      <PrivateRoute path='/search' component={Search} />
      <PrivateRoute exact path='/company' component={Company} />
      <PrivateRoute exact path='/company/new' component={CompanyCreate} />
    </Switch>
  );
}
