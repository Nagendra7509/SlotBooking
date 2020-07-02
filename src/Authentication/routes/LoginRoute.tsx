import React from 'react'
import { observable, action } from 'mobx'
import { History } from 'history'
import { observer, inject } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import LoginPage from '../components/LoginPage'
import Strings from '../i18n/strings.json'
import { getAccessToken } from '../../utils/StorageUtils'
import AuthenticationStore from '../stores/AuthenticationStore'

interface LoginRouteProps extends WithTranslation {
   history: History
}

interface InjectedProps extends LoginRouteProps {
   authenticationStore: AuthenticationStore
}

@inject('authenticationStore')
@observer
class LoginRoute extends React.Component<LoginRouteProps> {
   @observable userName: string = ''
   @observable password: string = ''
   @observable errroMessageUserName: string = this.props.t(
      `authentication:noError`
   )
   @observable errorMessagePassword: string = this.props.t(
      `authentication:noError`
   )
   @observable errorMessageLoginButton: string = this.props.t(
      `authentication:noError`
   )

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthenticationStore = () => {
      return this.getInjectedProps().authenticationStore
   }

   @action.bound
   onChangeUserNameLogin(event: React.ChangeEvent<HTMLInputElement>) {
      this.userName = event.target.value
   }

   @action.bound
   onChangePasswordLogin(event: React.ChangeEvent<HTMLInputElement>) {
      this.password = event.target.value
   }

   onClickLogin = async () => {
      const { t } = this.props
      this.errroMessageUserName = this.errorMessagePassword = this.errorMessageLoginButton = t(
         `authentication:noError`
      )

      //const { usernameInavalid, incorrectPassword, serverError } = Strings.login

      if (this.userName !== '' && this.password !== '') {
         const { userLogin } = this.getAuthenticationStore()
         await userLogin(this.userName, this.password)

         const { isAdmin, getUserLoginError } = this.getAuthenticationStore()

         if (getUserLoginError != null) {
            const loginCredentialsError = getUserLoginError.split(' ')

            if (loginCredentialsError.includes('username')) {
               this.errroMessageUserName = t(
                  `authentication:login.usernameInvalid`
               )
               this.errorMessagePassword = t(`authentication:noError`)
            } else if (loginCredentialsError.includes('password')) {
               this.errroMessageUserName = t(`authentication:noError`)
               this.errorMessagePassword = t(
                  `authentication:login.incorrectPassword`
               )
            } else {
               this.errorMessageLoginButton = t(
                  `authentication:login.serverError`
               )
            }
         } else {
            if (getAccessToken()) {
               const { history } = this.props

               if (isAdmin) {
                  history.replace('/slot-booking/admin/issues/')
               } else {
                  history.replace('/slot-booking/dashBoard/')
               }
            }
         }
      } else if (this.userName === '' && this.password === '') {
         this.errroMessageUserName = t(`authentication:login.usernameInvalid`)
         this.errorMessagePassword = t(`authentication:login.incorrectPassword`)
         this.errorMessageLoginButton = t(`authentication:noError`)
      } else if (this.userName !== '' && this.password === '') {
         this.errorMessagePassword = t(`authentication:login.incorrectPassword`)
         this.errroMessageUserName = t(`authentication:noError`)
         this.errorMessageLoginButton = t(`authentication:noError`)
      } else {
         this.errroMessageUserName = t(`authentication:login.usernameInvalid`)
         this.errorMessagePassword = t(`authentication:noError`)
         this.errorMessageLoginButton = t(`authentication:noError`)
      }
   }

   render() {
      const {
         userName,
         password,
         onChangeUserNameLogin,
         onChangePasswordLogin,
         onClickLogin,
         errroMessageUserName,
         errorMessagePassword,
         errorMessageLoginButton
      } = this

      const { getUserLoginStatus, isAdmin } = this.getAuthenticationStore()

      return (
         <LoginPage
            userName={userName}
            password={password}
            onChangeUserNameLogin={onChangeUserNameLogin}
            onChangePasswordLogin={onChangePasswordLogin}
            onClickLogin={onClickLogin}
            errroMessageUserName={errroMessageUserName}
            errorMessagePassword={errorMessagePassword}
            errorMessageLoginButton={errorMessageLoginButton}
            getUserLoginStatus={getUserLoginStatus}
            isAdmin={isAdmin}
         />
      )
   }
}

export default withTranslation('translation', {})(LoginRoute)
