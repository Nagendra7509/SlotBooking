import React from 'react'
import { observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import { API_FETCHING } from '@ib/api-constants'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
   Typo12HKGroteskSemiBoldSteel,
   Typo12HKGroteskRegular
} from '../../../styleGuide/Typos'
import LanguageChange from '../../../Common/components/ChangeLanguage'
import { InputTag, IbHubsLogo } from '../../common/components'
import { SIGN_UP_PATH } from '../../constants/routeConstants/RouteConstants'
import { ibhubsLogo } from '../../assets'
import Strings from '../../i18n/strings.json'
import { getAccessToken } from '../../../utils/StorageUtils'
import {
   LoginPageContainer,
   LoginForm,
   SigInText,
   SignInBtn,
   DontHaveAccount,
   SignupLink
} from './styledComponent'

interface LoginPageProps extends WithTranslation {
   isAdmin: boolean
   userName: string
   password: string
   onChangeUserNameLogin: (event: React.ChangeEvent<HTMLInputElement>) => void
   onChangePasswordLogin: (event: React.ChangeEvent<HTMLInputElement>) => void
   onClickLogin: (event: React.MouseEvent<HTMLButtonElement>) => void
   errroMessageUserName: string
   errorMessagePassword: string
   errorMessageLoginButton: string
   getUserLoginStatus: number
}

@observer
class LoginPage extends React.Component<LoginPageProps> {
   render() {
      if (getAccessToken()) {
         const { isAdmin } = this.props

         if (isAdmin && isAdmin !== undefined) {
            return <Redirect to={{ pathname: '/slot-booking/admin/issues/' }} />
         }
         if (!isAdmin && isAdmin !== undefined) {
            return <Redirect to={{ pathname: '/slot-booking/dashBoard/' }} />
         }
      }

      const {
         userName,
         password,
         onChangeUserNameLogin,
         onChangePasswordLogin,
         onClickLogin,
         errroMessageUserName,
         errorMessagePassword,
         errorMessageLoginButton,
         getUserLoginStatus,
         t
      } = this.props

      return (
         <LoginPageContainer>
            <LanguageChange />
            <LoginForm>
               <IbHubsLogo src={ibhubsLogo.logoAdress} alt='ibhubsLogo' />
               <SigInText>
                  {t(`authentication:login.hiTherePleaseSignIn`)}
               </SigInText>
               <Typo12HKGroteskSemiBoldSteel>
                  {t(`authentication:userName`)}
               </Typo12HKGroteskSemiBoldSteel>
               <InputTag
                  onChange={onChangeUserNameLogin}
                  value={userName}
                  type='text'
                  placeholder={t(`authentication:userName`)}
                  borderValue={
                     errroMessageUserName !== t('authentication:noError')
                  }
               />
               <Typo12HKGroteskRegular
                  visibilityValue={
                     errroMessageUserName !== t('authentication:noError')
                  }
               >
                  {errroMessageUserName}
               </Typo12HKGroteskRegular>
               <Typo12HKGroteskSemiBoldSteel>
                  {t(`authentication:password`)}
               </Typo12HKGroteskSemiBoldSteel>
               <InputTag
                  onChange={onChangePasswordLogin}
                  value={password}
                  type='password'
                  placeholder={t(`authentication:password`)}
                  borderValue={
                     errorMessagePassword !== t('authentication:noError')
                  }
               />
               <Typo12HKGroteskRegular
                  visibilityValue={
                     errorMessagePassword !== t('authentication:noError')
                  }
               >
                  {errorMessagePassword}
               </Typo12HKGroteskRegular>
               <SignInBtn
                  type='button'
                  onClick={onClickLogin}
                  data-testid='sign-up-button'
               >
                  {getUserLoginStatus === API_FETCHING
                     ? t(`authentication:login.loginLoading`)
                     : t(`authentication:login.login`)}
               </SignInBtn>
               <Typo12HKGroteskRegular
                  visibilityValue={
                     errorMessageLoginButton !== t('authentication:noError')
                  }
               >
                  {errorMessageLoginButton}
               </Typo12HKGroteskRegular>
               <DontHaveAccount>
                  {t(`authentication:login.donotHaveAnAccount`)}
                  <SignupLink href={SIGN_UP_PATH}>
                     {' '}
                     {t(`authentication:login.signUp`)}
                  </SignupLink>
               </DontHaveAccount>
            </LoginForm>
         </LoginPageContainer>
      )
   }
}

export default withTranslation('translation', {})(LoginPage)
