import React from 'react'
import { observer } from 'mobx-react'
import { Typo12HKGroteskSemiBoldSteel } from "../../../styleGuide/Typos";
import { InputTag, IbHubsLogo } from '../../common/components'
import { ibhubsLogo } from '../../assets'
import Strings from '../../i18n/strings.json'
import {
   SignUpPageContainer,
   SignUpForm,
   SignUpText,
   SignUpBtn
}
from './styledComponent'

@observer
class SignUpPage extends React.Component {
   render() {
      const {
         username,
         password,
         confirmPassword,
         onChangePasswordSignUp,
         onChangeConfirmPasswordSignUp,
         onChangeUserNameSignUp,
         onClickSignUpBtn
      } = this.props
      return (
         <SignUpPageContainer>
            <SignUpForm>
               <IbHubsLogo src={ibhubsLogo.logoAdress} alt='ibhubsLogo' />
               <SignUpText>{Strings.signUp.hiTherePleaseSignUp}</SignUpText>
               
               <Typo12HKGroteskSemiBoldSteel>{Strings.signUp.userName}</Typo12HKGroteskSemiBoldSteel>
               <InputTag
                  onChange={onChangeUserNameSignUp}
                  value={ username }
                  type='text'
                  placeholder='username'
               />

               
               <Typo12HKGroteskSemiBoldSteel>{Strings.signUp.password}</Typo12HKGroteskSemiBoldSteel>
               <InputTag
                  onChange={onChangePasswordSignUp}
                  value={password}
                  type='password'
                  placeholder='password'
               />
               
               <Typo12HKGroteskSemiBoldSteel>{Strings.signUp.confirmPassword}</Typo12HKGroteskSemiBoldSteel>
               <InputTag
                  onChange={onChangeConfirmPasswordSignUp}
                  value={confirmPassword}
                  type='password'
                  placeholder='confirm password'
               />
               
               <SignUpBtn
                  type='button'
                  onClick={onClickSignUpBtn}
                  data-testid='sign-up-button'
               >
                  {Strings.signUp.signUp}
               </SignUpBtn>
            </SignUpForm>
         </SignUpPageContainer>
      )
   }
}

export default SignUpPage
