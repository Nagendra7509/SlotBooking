import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getAccessToken } from '../../Authentication/utils/StorageUtils'
import { LOGIN_PATH } from '../../Authentication/constants/routeConstants/RouteConstants'
import { observer } from 'mobx-react'
//import LoginRoute from "../../Authentication/routes/LoginRoute";

@observer
class ProtectedRoute extends React.Component {
   render() {
      const { component: Component, ...otherProps } = this.props

      if (getAccessToken()) {
         return <Route component={Component} {...otherProps}/>
      }
      else {
         return <Redirect to={{ pathname: LOGIN_PATH }} />

      }
   }
}

export { ProtectedRoute }
