import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LoginPage from '.'

/*global expect */

describe('LoginPage testCases', () => {
   it('should render typed username', () => {
      const username = 'test-user'
      const { getByPlaceholderText } = render(
         <LoginPage username={username} onChangeUsername={() => {}} />
      )
      const userNameField = getByPlaceholderText('username')
      expect(userNameField.value).toBe(username)
   })

   it('should render typed password', () => {
      const password = 'test-user'
      const { getByPlaceholderText } = render(
         <LoginPage password={password} onChangePassword={() => {}} />
      )
      const passwordField = getByPlaceholderText('password')
      expect(passwordField.value).toBe(password)
   })

   it('should render username Error', () => {
      const { getByText } = render(
         <LoginPage errroMessageUserName='Incorrect userName' />
      )
      getByText(/Incorrect userName/i)
   })

   it('should render password Error', () => {
      const { getByText } = render(
         <LoginPage errorMessagePassword='Incorrect password' />
      )
      getByText(/Incorrect password/i)
   })

   it('should render userName Label', () => {
      const { getByText } = render(<LoginPage />)
      getByText(/USER NAME/i)
   })

   it('should render password Label', () => {
      const { getByText } = render(<LoginPage />)
      getByText(/PASSWORD/i)
   })

   it('should render login button', () => {
      const { getByRole } = render(<LoginPage />)
      getByRole('button', { name: 'LOGIN' })
   })
})
