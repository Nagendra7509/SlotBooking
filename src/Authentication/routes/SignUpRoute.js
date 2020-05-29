import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import SignUpPage from '../components/SignUpPage'
import { Redirect } from 'react-router-dom'
import { clearUserSession } from "../utils/StorageUtils";
@inject('authenticationStore')
@observer
class SignUpRoute extends React.Component {
   @observable userName = ''
   @observable password = ''
   @observable confirmPassword = ''

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
      clearUserSession();
      const { history } = this.props;
      history.replace('/slot-booking/login/');
   }

   render() {
      return (
         <SignUpPage
            userName={this.userName}
            password={this.password}
            confirmPassword={this.confirmPassword}
            onChangePasswordSignUp={this.onChangePasswordSignUp}
            onChangeConfirmPasswordSignUp={this.onChangeConfirmPasswordSignUp}
            onChangeUserNameSignUp={this.onChangeUserNameSignUp}
            onClickSignUpBtn={this.onClickSignUpBtn}
         />
      )
   }
}

export default SignUpRoute
