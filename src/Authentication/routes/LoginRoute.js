import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import LoginPage from '../components/LoginPage'
import Strings from '../i18n/strings.json'
import { getAccessToken } from '../../utils/StorageUtils'

@inject('authenticationStore')
@observer
class LoginRoute extends React.Component {
   @observable userName = ''
   @observable password = ''
   @observable errroMessageUserName = 'noError'
   @observable errorMessagePassword = 'noError'
   @observable errorMessageLoginButton = 'noError'

   @action.bound
   onChangeUserNameLogin(event) {
      this.userName = event.target.value
   }

   @action.bound
   onChangePasswordLogin(event) {
      this.password = event.target.value
   }

   onClickLogin = async() => {
      this.errroMessageUserName = this.errorMessagePassword = this.errorMessageLoginButton =
         'noError'

      const { usernameInavalid, incorrectPassword, serverError } = Strings.login

      if (this.userName != '' && this.password != '') {
         const { userLogin } = this.props.authenticationStore
         await userLogin(this.userName, this.password)

         const { isAdmin, getUserLoginError } = this.props.authenticationStore

         if (getUserLoginError != null) {
            const loginCredentialsError = getUserLoginError.split(' ')

            if (loginCredentialsError.includes('username')) {
               this.errroMessageUserName = usernameInavalid
               this.errorMessagePassword = 'noError'
            }
            else if (loginCredentialsError.includes('password')) {
               this.errroMessageUserName = 'noError'
               this.errorMessagePassword = incorrectPassword
            }
            else {
               this.errorMessageLoginButton = serverError
            }
         }
         else {
            // this.errroMessageUserName = 'noError';
            // this.errorMessagePassword = 'noError';

            if (getAccessToken()) {

               const { history } = this.props
               console.log(getAccessToken(), "access_token");
               console.log(isAdmin, "isAdmin");
               if (isAdmin) {
                  //alert('heloo');
                  history.push('/slot-booking/admin/issues/')
               }
               else {

                  history.push('/slot-booking/dashBoard/');
                  console.log(history);

               }
            }
            // else {
            //     this.errorMessageLoginButton = serverError;
            // }
         }
      }
      else if (this.userName == '' && this.password == '') {
         this.errroMessageUserName = usernameInavalid
         this.errorMessagePassword = incorrectPassword
         this.errorMessageLoginButton = 'noError'
      }
      else if (this.userName != '' && this.password == '') {
         this.errorMessagePassword = incorrectPassword
         this.errroMessageUserName = 'noError'
         this.errorMessageLoginButton = 'noError'
      }
      else {
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

      const { getUserLoginStatus, isAdmin } = this.props.authenticationStore

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
