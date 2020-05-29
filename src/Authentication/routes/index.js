import React from 'react'
import { Route } from 'react-router-dom'
import { SIGN_UP_PATH } from '../constants/routeConstants/RouteConstants'
import { LOGIN_PATH } from '../constants/routeConstants/RouteConstants'
import SignUpRoute from './SignUpRoute'
import LoginRoute from './LoginRoute'


export const authenticationSignUpRoute = (
   <Route path={SIGN_UP_PATH} component={SignUpRoute} />
)
export const authenticationLoginRoute = (
   <Route path={LOGIN_PATH} component={LoginRoute} />
)
