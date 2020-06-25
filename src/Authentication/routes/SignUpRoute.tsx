import React from 'react'
import { observable, action } from 'mobx'
import { History } from 'history'
import { observer, inject } from 'mobx-react'

import SignUpPage from '../components/SignUpPage'
import Strings from '../i18n/strings.json'
import AuthenticationStore from '../stores/AuthenticationStore'

interface SignUpRouteProps {
   history: History
}

interface InjectedProps extends SignUpRouteProps {
   authenticationStore: AuthenticationStore
}

@inject('authenticationStore')
@observer
class SignUpRoute extends React.Component<SignUpRouteProps> {
   @observable userName = ''
   @observable password = ''
   @observable confirmPassword = ''
   @observable userNameError = 'noError'
   @observable passwordError = 'noError'
   @observable confirmPasswordError = 'noError'

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthenticationStore = () => {
      return this.getInjectedProps().authenticationStore
   }

   @action
   onChangeUserNameSignUp: React.ChangeEventHandler<
      HTMLInputElement
   > = event => {
      this.userName = event.target.value
   }

   @action.bound
   onChangePasswordSignUp(event: React.ChangeEvent<HTMLInputElement>) {
      this.password = event.target.value
   }

   @action
   onChangeConfirmPasswordSignUp: React.ChangeEventHandler<
      HTMLInputElement
   > = event => {
      this.confirmPassword = event.target.value
   }

   onClickSignUpBtn = async () => {
      this.userNameError = this.passwordError = this.confirmPasswordError =
         'noError'

      const {
         passwordMisMatch,
         enterPassword,
         enterUserName,
         usernameAlreadyExits,
         passwordShouldBeGreaterThan8Characters
      } = Strings.signUp

      if (this.userName !== '' && this.password !== '') {
         if (this.password === this.confirmPassword) {
            const { userSignUp } = this.getAuthenticationStore()

            await userSignUp(this.userName, this.password)

            const { getUserSignUpError } = this.getAuthenticationStore()

            if (getUserSignUpError != null) {
               const signUpCredentialsError = getUserSignUpError.split(' ')

               if (signUpCredentialsError.includes('username')) {
                  this.userNameError = usernameAlreadyExits
                  this.passwordError = 'noError'
                  this.confirmPasswordError = 'noError'
               } else if (signUpCredentialsError.includes('password')) {
                  this.userNameError = 'noError'
                  this.passwordError = passwordShouldBeGreaterThan8Characters
                  this.confirmPasswordError = 'noError'
               }
            } else {
               const { history } = this.props
               history.replace('/slot-booking/login/')
            }
         } else {
            this.confirmPasswordError = passwordMisMatch
            this.userNameError = 'noError'
            this.passwordError = 'noError'
         }
      } else if (this.userName !== '' && this.password === '') {
         this.passwordError = enterPassword
         this.userNameError = 'noError'
         this.confirmPasswordError = 'noError'
      } else if (this.userName === '' && this.password !== '') {
         this.userNameError = enterUserName
      } else {
         this.userNameError = enterUserName
         this.passwordError = enterPassword
         this.confirmPasswordError = 'noError'
      }
   }

   render() {
      const {
         userName,
         password,
         confirmPassword,
         onChangePasswordSignUp,
         onChangeConfirmPasswordSignUp,
         onChangeUserNameSignUp,
         onClickSignUpBtn,
         userNameError,
         passwordError,
         confirmPasswordError
      } = this

      return (
         <SignUpPage
            userName={userName}
            password={password}
            confirmPassword={confirmPassword}
            onChangePasswordSignUp={onChangePasswordSignUp}
            onChangeConfirmPasswordSignUp={onChangeConfirmPasswordSignUp}
            onChangeUserNameSignUp={onChangeUserNameSignUp}
            onClickSignUpBtn={onClickSignUpBtn}
            userNameError={userNameError}
            passwordError={passwordError}
            confirmPasswordError={confirmPasswordError}
         />
      )
   }
}

export default SignUpRoute
