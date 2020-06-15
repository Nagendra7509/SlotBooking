import React from 'react'
import { observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'
import {
   Typo12HKGroteskSemiBoldSteel,
   Typo12HKGroteskRegular
} from '../../../styleGuide/Typos'
import { InputTag, IbHubsLogo } from '../../common/components'
import { SIGN_UP_PATH } from '../../constants/routeConstants/RouteConstants'
import { ibhubsLogo } from '../../assets'
import Strings from '../../i18n/strings.json'
import { getAccessToken } from '../../utils/StorageUtils'
import {
   LoginPageContainer,
   LoginForm,
   SigInText,
   SignInBtn,
   DontHaveAccount,
   SignupLink
} from './styledComponent'

@observer
class LoginPage extends React.Component {
   render() {
      if (getAccessToken()) {
         const { isAdmin } = this.props
         if (isAdmin && isAdmin != undefined) {
            return <Redirect to={{ pathname: '/slot-booking/admin/issues/' }} />
         }
         if (!isAdmin && isAdmin != undefined) {
            return <Redirect to={{ pathname: '/slot-booking/dashBoard/' }} />
         }
      }

      const {
         username,
         password,
         onChangeUserNameLogin,
         onChangePasswordLogin,
         onClickLogin,
         errroMessageUserName,
         errorMessagePassword,
         errorMessageLoginButton,
         getUserLoginStatus
      } = this.props

      return (
         <LoginPageContainer>
            <LoginForm>
               <IbHubsLogo src={ibhubsLogo.logoAdress} alt='ibhubsLogo' />

               <SigInText>{Strings.login.hiTherePleaseSignIn}</SigInText>

               <Typo12HKGroteskSemiBoldSteel>
                  {Strings.login.userName}
               </Typo12HKGroteskSemiBoldSteel>

               <InputTag
                  onChange={onChangeUserNameLogin}
                  value={username}
                  type='text'
                  placeholder='username'
                  borderValue={errroMessageUserName != 'noError'}
               />

               <Typo12HKGroteskRegular
                  visibilityValue={errroMessageUserName != 'noError'}
               >
                  {errroMessageUserName}
               </Typo12HKGroteskRegular>

               <Typo12HKGroteskSemiBoldSteel>
                  {Strings.login.password}
               </Typo12HKGroteskSemiBoldSteel>

               <InputTag
                  onChange={onChangePasswordLogin}
                  value={password}
                  type='password'
                  placeholder='password'
                  borderValue={errorMessagePassword != 'noError'}
               />

               <Typo12HKGroteskRegular
                  visibilityValue={errorMessagePassword != 'noError'}
               >
                  {errorMessagePassword}
               </Typo12HKGroteskRegular>

               <SignInBtn
                  type='button'
                  onClick={onClickLogin}
                  data-testid='sign-up-button'
               >
                  {getUserLoginStatus == API_FETCHING
                     ? Strings.login.loginLoading
                     : Strings.login.login}
               </SignInBtn>

               <Typo12HKGroteskRegular
                  visibilityValue={errorMessageLoginButton != 'noError'}
               >
                  {errorMessageLoginButton}
               </Typo12HKGroteskRegular>

               <DontHaveAccount>
                  {Strings.login.donotHaveAnAccount}
                  <SignupLink href={SIGN_UP_PATH}>
                     {' '}
                     {Strings.login.signUp}
                  </SignupLink>
               </DontHaveAccount>
            </LoginForm>
         </LoginPageContainer>
      )
   }
}

export default LoginPage
//LOGIN_PATH
//https://a2ae96eb5eb34fdda2eb65989640e7b0.vfs.cloud9.ap-southeast-1.amazonaws.com/slot-booking/sign-up/#/slot-booking/sign-up/
