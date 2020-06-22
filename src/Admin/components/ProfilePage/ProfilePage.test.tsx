import React from 'react'
import { createMemoryHistory } from 'history'
import { withRouter, Route, Router } from 'react-router-dom'
import { LOGIN_PATH } from '../../../Authentication/constants/routeConstants/RouteConstants'
import { ADMIN_PAGE_PROFILE } from '../../constants/routeConstants/RouteConstants'
/*global jest*/
/*global expect*/

import { render, fireEvent, waitFor } from '@testing-library/react'
import ProfilePage from '.'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('ProfilePage tests', () => {
   it('should test ProfilePage content', () => {
      let profilePage = new ProfilePage()

      const history = createMemoryHistory()
      const route = ADMIN_PAGE_PROFILE
      history.push(route)

      const { getByText, debug, getByRole, queryByRole, getByTestId } = render(
         <Router history={history}>
            <Route path={ADMIN_PAGE_PROFILE}>
               <ProfilePage history={history} />
            </Route>
            <Route path={LOGIN_PATH}>
               <LocationDisplay />
            </Route>
         </Router>
      )
      getByText('ISSUES')
      getByText('WASHING MACHINE')
      getByText('SETTINGS')
      getByText('Profile')
      const logOutButtonField = getByRole('button', { name: 'LogOut' })
      fireEvent.click(logOutButtonField)

      waitFor(() => {
         expect(
            queryByRole('button', { name: 'LogOut' })
         ).not.toBeInTheDocument()

         expect(getByTestId('location-display')).toHaveTextContent(LOGIN_PATH)
      })
   })
})
