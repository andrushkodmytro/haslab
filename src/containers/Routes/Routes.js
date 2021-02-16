import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'page/Login';
import SignUp from 'page/SignUp';
import Account from 'page/Account';
import Search from 'page/Search';
import Company from 'page/Company';
import CompanyCreate from 'page/CompanyCreate';
import ProductCreate from 'page/ProductCreate';
import ProductsPreview from 'page/ProductsPreview';
import OrderCreate from 'page/OrderCreate';
import OrdersPreview from 'page/OrdersPreview';
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
      <PrivateRoute path='/products' component={ProductsPreview} />
      <PrivateRoute path='/products/new' component={ProductCreate} />
      <PrivateRoute exact path='/orders' component={OrdersPreview} />
      <PrivateRoute exact path='/orders/new' component={OrderCreate} />
    </Switch>
  );
}
