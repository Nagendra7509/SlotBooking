import React from 'react'
import { API_INITIAL } from '@ib/api-constants'
import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
//import { setAccessToken } from '../../../utils/StorageUtils'
import { getFormattedErrorDescription } from '../../../utils/APIUtils'
import { setAccessToken } from '../../../utils/StorageUtils'
import AuthService from '../../services/AuthService/index.api'
import { RequestObject, GetLoginResponse } from '../types'

class AuthenticationStore {
   @observable getUserLoginStatus!: number
   @observable getUserLoginError!: null | string
   authService: AuthService
   @observable getUserSignUpStatus!: number
   @observable getUserSignUpError!: null | string

   @observable isAdmin!: boolean
   @observable loginCredentialsError!: string
   @observable signUpCredentialError!: string

   constructor(authService: AuthService) {
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
      this.isAdmin = false
   }

   @action.bound
   userLogin(userName: string, password: string) {
      const requestObj: RequestObject = {
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
   setUserLoginAPIResponse(response) {
      //console.log(response, 'response')
      setAccessToken(response.access_token)
      this.isAdmin = response.is_admin
      this.getUserLoginError = null
   }

   @action.bound
   setGetUserLoginAPIError(error: object) {
      console.log(error, 'response')
      this.getUserLoginError = getFormattedErrorDescription(error)
   }

   @action.bound
   userSignUp(userName: string, password: string) {
      const requestObj: RequestObject = {
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
      this.getUserSignUpError = getFormattedErrorDescription(error)
      // console.log(this.getUserSignUpError);
   }
}

export default AuthenticationStore
