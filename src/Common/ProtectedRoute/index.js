import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getAccessToken } from '../../Authentication/utils/StorageUtils'
import { LOGIN_PATH } from '../../Authentication/constants/routeConstants/RouteConstants'
import { observer } from 'mobx-react'

@observer
class ProtectedRoute extends React.Component {
   render() {
      const { path, component } = this.props
      if (getAccessToken()) {
         return <Route path={path} component={component} />
      } else {
         return <Redirect to={{ pathname: LOGIN_PATH }} />
      }
   }
}

export { ProtectedRoute }
