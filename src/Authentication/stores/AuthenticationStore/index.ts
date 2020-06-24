import React from 'react'
import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'
import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
//import { setAccessToken } from '../../../utils/StorageUtils'
import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'
import { setAccessToken } from '../../utils/StorageUtils'
import AuthService from '../../services/AuthService/index.api'
import SignUpService from '../../services/SignUpService/index.api'

type setUserLoginAPIResponseProps = {
   access_token: string
   refresh_token: string
   is_admin: boolean
}

type requestObjProps = {
   username: string
   password: string
}

class AuthenticationStore {
   @observable getUserLoginStatus!: number
   @observable getUserLoginError!: null | string
   authService: AuthService
   @observable getUserSignUpStatus!: number
   @observable getUserSignUpError!: null | string

   @observable isAdmin: undefined | boolean
   @observable loginCredentialsError!: string
   @observable signUpCredentialError!: string

   constructor(authService) {
      this.init()
      this.authService = authService
   }

   init() {
      this.getUserSignUpStatus = API_INITIAL
      this.getUserSignUpError = null
      this.getUserLoginStatus = API_INITIAL
      this.getUserLoginError = null
      this.loginCredentialsError = ''
      this.signUpCredentialError = ''
      this.isAdmin = undefined
   }

   @action.bound
   userLogin(userName: string, password: string) {
      const requestObj: requestObjProps = {
         username: userName,
         password: password
      }

      const userPromise = this.authService.loginAPI(requestObj)
      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserLoginAPIStatus, this.setUserLoginAPIResponse)
         .catch(this.setGetUserLoginAPIError)
   }

   @action.bound
   setGetUserLoginAPIStatus(apiStatus: number) {
      this.getUserLoginStatus = apiStatus
   }

   @action.bound
   setUserLoginAPIResponse(response: setUserLoginAPIResponseProps) {
      console.log(response, 'response')
      setAccessToken(response.access_token)
      this.isAdmin = response.is_admin
      this.getUserLoginError = null
   }

   @action.bound
   setGetUserLoginAPIError(error: object) {
      console.log(error, 'response')
      this.getUserLoginError = getUserDisplayableErrorMessage(error)
   }

   @action.bound
   userSignUp(userName: string, password: string) {
      const requestObj: requestObjProps = {
         username: userName,
         password: password
      }
      const userPromise = this.authService.signUpAPI(requestObj)

      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserSignUpAPIStatus, this.setUserSignUpAPIResponse)
         .catch(this.setGetUserSignUpAPIError)
   }

   @action.bound
   setGetUserSignUpAPIStatus(apiStatus: number) {
      this.getUserSignUpStatus = apiStatus
   }

   @action.bound
   setUserSignUpAPIResponse(response) {
      //alert('sign up done successfully');
      this.getUserSignUpError = null
   }

   @action.bound
   setGetUserSignUpAPIError(error: object) {
      this.getUserSignUpError = getUserDisplayableErrorMessage(error)
      // console.log(this.getUserSignUpError);
   }
}

export default AuthenticationStore
