import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFound from './notfound/NotFound';
import ActivateEmail from './auth/ActivateEmail';
import ForgotPassword from './forgotpassword/ForgotPassword';
import ResetPassword from './resetpassword/ResetPassword';
import { GlobalState } from '../../GlobalState';

const Pages = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.userApi.isLogged;
  console.log(isLogged);
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/user/activate/:token' component={ActivateEmail} />
      <Route path='/forgot_password' component={ForgotPassword} />
      <Route path='/user/reset/:reset_token' component={ResetPassword} />

      <Route path='/dashboard' component={isLogged ? Dashboard : NotFound} />

      <Route path='*' component={NotFound} />
    </Switch>
  );
};

export default Pages;
