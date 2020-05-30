import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SignUpPage from '.'

/*global expect */

describe('SignUpPage testCases', () => {
   it('should render typed username', () => {
      const username = 'test-user'
      const { getByPlaceholderText } = render(
         <SignUpPage username={username} onChangeUsername={() => {}} />
      )
      const userNameField = getByPlaceholderText('username')
      expect(userNameField.value).toBe(username)
   })

   it('should render typed password', () => {
      const password = 'test-user'
      const { getByPlaceholderText } = render(
         <SignUpPage password={password} onChangePassword={() => {}} />
      )
      const passwordField = getByPlaceholderText('password')
      expect(passwordField.value).toBe(password)
   })

   it('should render typed confirmPassword', () => {
      const confirmPassword = 'test-user'
      const { getByPlaceholderText } = render(
         <SignUpPage
            confirmPassword={confirmPassword}
            onChangeConfirmPassword={() => {}}
         />
      )
      const confirmPasswordField = getByPlaceholderText('confirm password')
      expect(confirmPasswordField.value).toBe(confirmPassword)
   })

   it('should render userName Label', () => {
      const { getByText } = render(<SignUpPage />)
      getByText(/USER NAME/i)
   })

   it('should render password Label', () => {
      const { queryAllByText } = render(<SignUpPage />)
      queryAllByText(/PASSWORD/i)
   })

   it('should render confirm password Label', () => {
      const { getByText } = render(<SignUpPage />)
      getByText(/CONFIRM PASSWORD/i)
   })

   it('should render sign up button', () => {
      const { getByRole } = render(<SignUpPage />)
      getByRole('button', { name: 'SIGNUP' })
   })
})
