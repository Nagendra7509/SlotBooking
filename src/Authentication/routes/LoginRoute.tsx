import React from 'react'
import { observable, action } from 'mobx'
import { History } from 'history'
import { observer, inject } from 'mobx-react'
import LoginPage from '../components/LoginPage'
import Strings from '../i18n/strings.json'
import { getAccessToken } from '../../utils/StorageUtils'
import AuthenticationStore from '../stores/AuthenticationStore'

interface LoginRouteProps {
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
   @observable errroMessageUserName: string = 'noError'
   @observable errorMessagePassword: string = 'noError'
   @observable errorMessageLoginButton: string = 'noError'

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
      this.errroMessageUserName = this.errorMessagePassword = this.errorMessageLoginButton =
         'noError'

      const { usernameInavalid, incorrectPassword, serverError } = Strings.login

      if (this.userName !== '' && this.password !== '') {
         const { userLogin } = this.getAuthenticationStore()
         await userLogin(this.userName, this.password)

         const { isAdmin, getUserLoginError } = this.getAuthenticationStore()

         if (getUserLoginError != null) {
            const loginCredentialsError = getUserLoginError.split(' ')

            if (loginCredentialsError.includes('username')) {
               this.errroMessageUserName = usernameInavalid
               this.errorMessagePassword = 'noError'
            } else if (loginCredentialsError.includes('password')) {
               this.errroMessageUserName = 'noError'
               this.errorMessagePassword = incorrectPassword
            } else {
               this.errorMessageLoginButton = serverError
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
         this.errroMessageUserName = usernameInavalid
         this.errorMessagePassword = incorrectPassword
         this.errorMessageLoginButton = 'noError'
      } else if (this.userName !== '' && this.password === '') {
         this.errorMessagePassword = incorrectPassword
         this.errroMessageUserName = 'noError'
         this.errorMessageLoginButton = 'noError'
      } else {
         this.errroMessageUserName = usernameInavalid
         this.errorMessagePassword = 'noError'
         this.errorMessageLoginButton = 'noError'
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

export default LoginRoute
