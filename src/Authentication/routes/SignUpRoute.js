import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import SignUpPage from '../components/SignUpPage'
import { clearUserSession } from "../../utils/StorageUtils";
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


   onClickSignUpBtn = async() => {
      this.userNameError = this.passwordError = this.confirmPasswordError = "noError";

      const { passwordMisMatch, enterPassword, enterUserName, usernameAlreadyExits, passwordShouldBeGreaterThan8Characters } = Strings.signUp;

      if (this.userName != "" && this.password != "") {
         if (this.password === this.confirmPassword) {
            const { userSignUp } = this.props.authenticationStore;

            await userSignUp(this.userName, this.password);

            const { getUserSignUpError } = this.props.authenticationStore;

            if (getUserSignUpError != null) {
               const signUpCredentialsError = getUserSignUpError.split(" ");

               if (signUpCredentialsError.includes("username")) {
                  this.userNameError = usernameAlreadyExits;
                  this.passwordError = 'noError';
                  this.confirmPasswordError = "noError";
               }
               else if (signUpCredentialsError.includes('password')) {
                  this.userNameError = 'noError';
                  this.passwordError = passwordShouldBeGreaterThan8Characters;
                  this.confirmPasswordError = "noError";
               }
            }
            else {
               //this.userNameError = "noError";
               //this.passwordError = "noError";
               const { history } = this.props;
               history.replace('/slot-booking/login/');
            }
            //this.confirmPasswordError = "noError";

         }
         else {
            this.confirmPasswordError = passwordMisMatch;
            this.userNameError = 'noError';
            this.passwordError = 'noError';
         }

      }
      else if (this.userName != "" && this.password == "") {
         this.passwordError = enterPassword;
         this.userNameError = 'noError';
         this.confirmPasswordError = 'noError';
      }
      else if (this.userName == "" && this.password != "") {
         this.userNameError = enterUserName;
      }
      else {
         this.userNameError = enterUserName;
         this.passwordError = enterPassword;
         this.confirmPasswordError = 'noError';
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
