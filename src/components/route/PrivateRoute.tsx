import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteProps {
  user?: any; // TODO: type the user.
  component: FC;
  path: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ user, component, path }) => {

  if (!user) {
    return <Redirect to={{ pathname: '/' }}/>;
  }

  return <Route exact path={path} component={component}/>;
};
