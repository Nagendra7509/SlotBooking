import React from 'react'
import { Route } from 'react-router-dom'
import { SIGN_UP_PATH } from '../constants/routeConstants/RouteConstants'
import { LOGIN_PATH } from '../constants/routeConstants/RouteConstants'
import SignUpRoute from './SignUpRoute'
import LoginRoute from './LoginRoute'


export const routesOfSignInAndSignUp = [
   <Route key={Math.random()} path={SIGN_UP_PATH} component={SignUpRoute} />,
   <Route key={Math.random()} path={LOGIN_PATH} component={LoginRoute} />
];
