import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getAccessToken } from '../../Authentication/utils/StorageUtils'
import { LOGIN_PATH } from '../../Authentication/constants/routeConstants/RouteConstants'
import { observer } from 'mobx-react'

@observer
class ProtectedRoute extends React.Component {
   render() {
      const { component: Component, ...otherProps } = this.props
      console.log(getAccessToken(), "protectedRoute getAccessToken")
      if (getAccessToken()) {
         return <Route component={Component} {...otherProps}/>
      }
      else {
         return <Redirect to={{ pathname: LOGIN_PATH }} />
      }
   }
}

export { ProtectedRoute }
