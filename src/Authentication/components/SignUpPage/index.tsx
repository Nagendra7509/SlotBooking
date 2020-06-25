import React from 'react'
import { observer } from 'mobx-react'
import {
   Typo12HKGroteskSemiBoldSteel,
   Typo12HKGroteskRegular
} from '../../../styleGuide/Typos'
import { InputTag, IbHubsLogo } from '../../common/components'
import { ibhubsLogo } from '../../assets'
import Strings from '../../i18n/strings.json'
import { LOGIN_PATH } from '../../constants/routeConstants/RouteConstants'
import {
   SignUpPageContainer,
   SignUpForm,
   SignUpText,
   SignUpBtn,
   AlreadyHaveAccount,
   SignInLink
} from './styledComponent'

type SignUpPageProps = {
   userName?: string
   password?: string
   confirmPassword?: string
   onChangePasswordSignUp?: (event: React.ChangeEvent<HTMLInputElement>) => void
   onChangeConfirmPasswordSignUp?: (
      event: React.ChangeEvent<HTMLInputElement>
   ) => void
   onChangeUserNameSignUp?: (event: React.ChangeEvent<HTMLInputElement>) => void
   onClickSignUpBtn?: (event: React.MouseEvent<HTMLButtonElement>) => void
   userNameError?: string
   passwordError?: string
   confirmPasswordError?: string
}

@observer
class SignUpPage extends React.Component<SignUpPageProps> {
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
      } = this.props

      return (
         <SignUpPageContainer>
            <SignUpForm>
               <IbHubsLogo src={ibhubsLogo.logoAdress} alt='ibhubsLogo' />

               <SignUpText>{Strings.signUp.hiTherePleaseSignUp}</SignUpText>

               <Typo12HKGroteskSemiBoldSteel>
                  {Strings.signUp.userName}
               </Typo12HKGroteskSemiBoldSteel>

               <InputTag
                  onChange={onChangeUserNameSignUp}
                  value={userName}
                  type='text'
                  placeholder='username'
                  borderValue={userNameError !== 'noError'}
               />

               <Typo12HKGroteskRegular
                  visibilityValue={userNameError !== 'noError'}
               >
                  {userNameError}
               </Typo12HKGroteskRegular>

               <Typo12HKGroteskSemiBoldSteel>
                  {Strings.signUp.password}
               </Typo12HKGroteskSemiBoldSteel>

               <InputTag
                  onChange={onChangePasswordSignUp}
                  value={password}
                  type='password'
                  placeholder='password'
                  borderValue={passwordError !== 'noError'}
               />

               <Typo12HKGroteskRegular
                  visibilityValue={passwordError !== 'noError'}
               >
                  {passwordError}
               </Typo12HKGroteskRegular>

               <Typo12HKGroteskSemiBoldSteel>
                  {Strings.signUp.confirmPassword}
               </Typo12HKGroteskSemiBoldSteel>

               <InputTag
                  onChange={onChangeConfirmPasswordSignUp}
                  value={confirmPassword}
                  type='password'
                  placeholder='confirm password'
                  borderValue={confirmPasswordError !== 'noError'}
               />

               <Typo12HKGroteskRegular
                  visibilityValue={confirmPasswordError !== 'noError'}
               >
                  {confirmPasswordError}
               </Typo12HKGroteskRegular>

               <SignUpBtn
                  type='button'
                  onClick={onClickSignUpBtn}
                  data-testid='sign-up-button'
               >
                  {Strings.signUp.signUp}
               </SignUpBtn>

               <AlreadyHaveAccount>
                  {Strings.signUp.alreadyHaveAnAccount}
                  <SignInLink href={LOGIN_PATH}>
                     {' '}
                     {Strings.signUp.login}
                  </SignInLink>
               </AlreadyHaveAccount>
            </SignUpForm>
         </SignUpPageContainer>
      )
   }
}

export default SignUpPage
