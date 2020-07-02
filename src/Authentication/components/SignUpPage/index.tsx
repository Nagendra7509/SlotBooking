import React from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
   Typo12HKGroteskSemiBoldSteel,
   Typo12HKGroteskRegular
} from '../../../styleGuide/Typos'
import LanguageChange from '../../../Common/components/ChangeLanguage'
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

interface SignUpPageProps extends WithTranslation {
   userName: string
   password: string
   confirmPassword: string
   onChangePasswordSignUp: (event: React.ChangeEvent<HTMLInputElement>) => void
   onChangeConfirmPasswordSignUp: (
      event: React.ChangeEvent<HTMLInputElement>
   ) => void
   onChangeUserNameSignUp: (event: React.ChangeEvent<HTMLInputElement>) => void
   onClickSignUpBtn: (event: React.MouseEvent<HTMLButtonElement>) => void
   userNameError: string
   passwordError: string
   confirmPasswordError: string
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
         confirmPasswordError,
         t
      } = this.props

      return (
         <SignUpPageContainer>
            <LanguageChange />
            <SignUpForm>
               <IbHubsLogo src={ibhubsLogo.logoAdress} alt='ibhubsLogo' />

               <SignUpText>
                  {t(`authentication:signUp.hiTherePleaseSignUp`)}
               </SignUpText>

               <Typo12HKGroteskSemiBoldSteel>
                  {t(`authentication:userName`)}
               </Typo12HKGroteskSemiBoldSteel>

               <InputTag
                  onChange={onChangeUserNameSignUp}
                  value={userName}
                  type='text'
                  placeholder={t(`authentication:userName`)}
                  borderValue={userNameError !== t('authentication:noError')}
               />

               <Typo12HKGroteskRegular
                  visibilityValue={
                     userNameError !== t('authentication:noError')
                  }
               >
                  {userNameError}
               </Typo12HKGroteskRegular>

               <Typo12HKGroteskSemiBoldSteel>
                  {t(`authentication:password`)}
               </Typo12HKGroteskSemiBoldSteel>

               <InputTag
                  onChange={onChangePasswordSignUp}
                  value={password}
                  type='password'
                  placeholder={t(`authentication:password`)}
                  borderValue={passwordError !== t('authentication:noError')}
               />

               <Typo12HKGroteskRegular
                  visibilityValue={
                     passwordError !== t('authentication:noError')
                  }
               >
                  {passwordError}
               </Typo12HKGroteskRegular>

               <Typo12HKGroteskSemiBoldSteel>
                  {t(`authentication:signUp.confirmPassword`)}
               </Typo12HKGroteskSemiBoldSteel>

               <InputTag
                  onChange={onChangeConfirmPasswordSignUp}
                  value={confirmPassword}
                  type='password'
                  placeholder={t(`authentication:signUp.confirmPassword`)}
                  borderValue={
                     confirmPasswordError !== t('authentication:noError')
                  }
               />

               <Typo12HKGroteskRegular
                  visibilityValue={
                     confirmPasswordError !== t('authentication:noError')
                  }
               >
                  {confirmPasswordError}
               </Typo12HKGroteskRegular>

               <SignUpBtn
                  type='button'
                  onClick={onClickSignUpBtn}
                  data-testid='sign-up-button'
               >
                  {t(`authentication:signUp.signUp`)}
               </SignUpBtn>

               <AlreadyHaveAccount>
                  {t(`authentication:signUp.alreadyHaveAnAccount`)}
                  <SignInLink href={LOGIN_PATH}>
                     {' '}
                     {t(`authentication:signUp.login`)}
                  </SignInLink>
               </AlreadyHaveAccount>
            </SignUpForm>
         </SignUpPageContainer>
      )
   }
}

export default withTranslation('translation', {})(SignUpPage)
