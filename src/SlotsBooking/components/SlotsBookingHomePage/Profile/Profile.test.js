// import React from 'react'

// /*global jest*/
// /*global expect*/

// import { render, fireEvent } from '@testing-library/react'
// import { Provider } from 'mobx-react'
// import Profile from '.'
// describe('Profile tests', () => {
//    it('should test Profile content', async() => {
//       const { getByText, debug, getByRole } = render(<Profile />)
//       //debug();

//       getByText('Home')
//       getByText('Requests')
//       getByText('Report an Issue')
//       getByText('Previous Slots')
//       getByText('Profile')
//       getByText('Number of slots missed:0')
//       getByRole('button', { name: 'Logout' })
//    })
// })


import React from 'react'
import { createMemoryHistory } from 'history'
import { withRouter, Route, Router } from 'react-router-dom'
import { LOGIN_PATH } from '../../../../Authentication/constants/routeConstants/RouteConstants'
import { PROFILE_PAGE } from '../../../constants/routeConstants/RouteConstants'
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
      const route = PROFILE_PAGE
      history.push(route)

      const { getByText, debug, getByRole, queryByRole, getByTestId } = render(
         <Router history={history}>
            <Route path={PROFILE_PAGE}>
               <ProfilePage history={history} />
            </Route>
            <Route path={LOGIN_PATH}>
               <LocationDisplay />
            </Route>
         </Router>
      )
      getByText('Home')
      getByText('Requests')
      getByText('Report an Issue')
      getByText('Previous Slots')
      getByText('Profile')
      getByText('Number of slots missed:0')
      const logOutButtonField = getByRole('button', { name: 'Logout' })
      fireEvent.click(logOutButtonField)

      waitFor(() => {
         expect(
            queryByRole('button', { name: 'LogOut' })
         ).not.toBeInTheDocument()

         expect(getByTestId('location-display')).toHaveTextContent(LOGIN_PATH)
      })
   })
})
