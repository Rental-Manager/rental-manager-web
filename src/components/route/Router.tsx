import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from '../../pages/Landing';
import { PrivateRoute } from './PrivateRoute';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';

interface RouterProps {
  user?: any;
}

export const Router: FC<RouterProps> = ({ user }) => {

  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>

      <PrivateRoute component={Home} path={'/home'} user={user}/>
    </Switch>
  </BrowserRouter>;
};
