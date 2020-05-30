import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import SignUpPage from '../components/SignUpPage'
import { clearUserSession } from "../utils/StorageUtils";
import Strings from "../i18n/strings.json";


@inject('authenticationStore')
@observer
class SignUpRoute extends React.Component {

   @observable userName = ''
   @observable password = ''
   @observable confirmPassword = '';
   @observable userNameError = 'noError';
   @observable passwordError = "noError";
   @observable confirmPasswordError = 'noError';

   @action.bound
   onChangeUserNameSignUp(event) {
      this.userName = event.target.value
   }

   @action.bound
   onChangePasswordSignUp(event) {
      this.password = event.target.value
   }

   @action.bound
   onChangeConfirmPasswordSignUp(event) {
      this.confirmPassword = event.target.value
   }

   @action.bound
   onClickSignUpBtn() {

      const { passwordMisMatch, enterPassword, enterUserName } = Strings.signUp;

      if (this.userName != "" && this.password != "") {
         if (this.password == this.confirmPassword) {
            clearUserSession();
            const { history } = this.props;
            history.replace('/slot-booking/login/');
         }
         else {
            this.confirmPasswordError = passwordMisMatch;
         }
         this.userNameError = '';
         this.passwordError = '';
      }
      else if (this.userName != "" && this.password == "") {
         this.passwordError = enterPassword;
         this.userNameError = '';
         this.confirmPasswordError = '';
      }
      else if (this.userName == "" && this.password != "") {
         this.userNameError = enterUserName;
      }
      else {
         this.userNameError = enterUserName;
         this.passwordError = enterPassword;
         this.confirmPassword = '';
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
      } = this;

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
