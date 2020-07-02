import React from 'react'
import { observable, action } from 'mobx'
import { History } from 'history'
import { observer, inject } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'

import SignUpPage from '../components/SignUpPage'
import Strings from '../i18n/strings.json'
import AuthenticationStore from '../stores/AuthenticationStore'

interface SignUpRouteProps extends WithTranslation {
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
   @observable userNameError = this.props.t(`authentication:noError`)
   @observable passwordError = this.props.t(`authentication:noError`)
   @observable confirmPasswordError = this.props.t(`authentication:noError`)

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
      const { t } = this.props
      this.userNameError = this.passwordError = this.confirmPasswordError = t(
         `authentication:noError`
      )

      // const {
      //    passwordMisMatch,
      //    enterPassword,
      //    enterUserName,
      //    usernameAlreadyExits,
      //    passwordShouldBeGreaterThan8Characters
      // } = Strings.signUp

      if (this.userName !== '' && this.password !== '') {
         if (this.password === this.confirmPassword) {
            const { userSignUp } = this.getAuthenticationStore()

            await userSignUp(this.userName, this.password)

            const { getUserSignUpError } = this.getAuthenticationStore()

            if (getUserSignUpError != null) {
               const signUpCredentialsError = getUserSignUpError.split(' ')

               if (signUpCredentialsError.includes('username')) {
                  this.userNameError = t(
                     `authentication:signUp.usernameAlreadyExits`
                  )
                  this.passwordError = t(`authentication:noError`)
                  this.confirmPasswordError = t(`authentication:noError`)
               } else if (signUpCredentialsError.includes('password')) {
                  this.userNameError = t(`authentication:noError`)
                  this.passwordError = t(
                     `authentication:signUp.passwordShouldBeGreaterThan8Characters`
                  )
                  this.confirmPasswordError = t(`authentication:noError`)
               }
            } else {
               const { history } = this.props
               history.replace('/slot-booking/login/')
            }
         } else {
            this.confirmPasswordError = t(
               `authentication:signUp.passwordMisMatch`
            )
            this.userNameError = t(`authentication:noError`)
            this.passwordError = t(`authentication:noError`)
         }
      } else if (this.userName !== '' && this.password === '') {
         this.passwordError = t(`authentication:signUp.enterPassword`)
         this.userNameError = t(`authentication:noError`)
         this.confirmPasswordError = t(`authentication:noError`)
      } else if (this.userName === '' && this.password !== '') {
         this.userNameError = t(`authentication:signUp.enterUserName`)
      } else {
         this.userNameError = t(`authentication:signUp.enterUserName`)
         this.passwordError = t(`authentication:signUp.enterPassword`)
         this.confirmPasswordError = t(`authentication:noError`)
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

export default withTranslation('translation', {})(SignUpRoute)
