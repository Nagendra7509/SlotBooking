import React from 'react'
import Cookie from 'js-cookie'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'
import {
   API_FAILED,
   API_FETCHING,
   API_SUCCESS,
   API_INITIAL
}
from '@ib/api-constants'
import { SLOTS_BOOKING_PATH } from '../../SlotsBooking/constants/routeConstants/RouteConstants'
import { SIGN_UP_PATH } from '../constants/routeConstants/RouteConstants'
import { LOGIN_PATH } from '../constants/routeConstants/RouteConstants'
import LoginAPI from '../services/LoginService/index.fixture'
import AuthenticationStore from '../stores/AuthenticationStore/index'
import LoginRoute from './LoginRoute.js'

/*global jest*/
/*global expect*/

let mockGetCookie = jest.fn()

Cookie.get = mockGetCookie

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('LoginRoute Tests', () => {
   let authAPI, authenticationStore

   beforeEach(() => {
      authAPI = new LoginAPI()
      authenticationStore = new AuthenticationStore(authAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authenticationStore={authenticationStore} />
         </Router>
      )
      const loginButton = getByRole('button', { name: 'LOGIN' })
      fireEvent.click(loginButton)
      getByText(/Incorrect userName/i)
   })

   it('should render password empty error message', () => {
      const { getByText, getByRole, getByPlaceholderText } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authenticationStore={authenticationStore} />
         </Router>
      )

      const username = 'test-user'
      const userNameField = getByPlaceholderText('username')
      const loginButton = getByRole('button', { name: 'LOGIN' })

      fireEvent.change(userNameField, { target: { value: username } })
      fireEvent.click(loginButton)
      getByText(/Incorrect password/i)
   })

   it('should submit sign-in on press enter', () => {
      const { getByRole, getByPlaceholderText } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authenticationStore={authenticationStore} />
         </Router>
      )

      const username = 'test-user'
      const password = 'test-password'
      const userNameField = getByPlaceholderText('username')
      const passwordField = getByPlaceholderText('password')
      const loginButton = getByRole('button', { name: 'LOGIN' })

      fireEvent.change(userNameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.keyPress(loginButton, { key: 'Enter', code: 'Enter' })

      waitFor(() => getByRole('button', { name: 'Login....' }))
   })

   it('should render signInRoute success state', async() => {
      const history = createMemoryHistory()
      const route = LOGIN_PATH
      history.push(route)

      const {
         getByPlaceholderText,
         getByRole,
         queryByRole,
         getByTestId
      } = render(
         <Provider authenticationStore={authenticationStore}>
            <Router history={history}>
               <Route path={LOGIN_PATH}>
                  <LoginRoute />
               </Route>
               <Route path={SLOTS_BOOKING_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )

      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText('username')
      const passwordField = getByPlaceholderText('password')
      const loginButton = getByRole('button', { name: 'LOGIN' })

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve('resolve')
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authAPI.loginAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(loginButton)

      waitFor(() => {
         expect(
            queryByRole('button', { name: 'LOGIN' })
         ).not.toBeInTheDocument()

         expect(getByTestId('location-display')).toHaveTextContent(
            SLOTS_BOOKING_PATH
         )
      })
   })

   it('should render signInRoute failure state', () => {
      const { getByText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authenticationStore={authenticationStore} />
         </Router>
      )

      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText('username')
      const passwordField = getByPlaceholderText('password')
      const loginButton = getByRole('button', { name: 'LOGIN' })

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      }).catch(() => {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authAPI.loginAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(loginButton)
      authenticationStore.userLogin()
      waitFor(() => {
         getByText('server Error') //need to add server error when it failure
      })
   })
})
