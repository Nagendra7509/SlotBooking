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

class AuthenticationStore {
   @observable getUserLoginStatus
   @observable getUserLoginError
   loginAPIService
   @observable getUserSignUpStatus
   @observable getUserSignUpError
   signUpAPIService
   @observable isAdmin
   @observable loginCredentialsError = ''
   @observable signUpCredentialError = ''

   constructor(loginAPIService, signUpAPIService) {
      this.init()
      this.loginAPIService = loginAPIService
      this.signUpAPIService = signUpAPIService
   }

   init() {
      this.getUserSignUpStatus = API_INITIAL
      this.getUserSignUpError = null
      this.getUserLoginStatus = API_INITIAL
      this.getUserLoginError = null
      this.isAdmin = undefined;
   }

   @action.bound
   userLogin(userName, password) {
      const requestObj = {
         username: userName,
         password: password
      }
      //console.log(requestObj)
      const userPromise = this.loginAPIService.loginAPI(requestObj)
      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserLoginAPIStatus, this.setUserLoginAPIResponse)
         .catch(this.setGetUserLoginAPIError)
   }

   @action.bound
   setGetUserLoginAPIStatus(apiStatus) {
      this.getUserLoginStatus = apiStatus
   }

   @action.bound
   setUserLoginAPIResponse(response) {
      setAccessToken(response.access_token)
      this.isAdmin = response.is_admin
      this.getUserLoginError = null
   }

   @action.bound
   setGetUserLoginAPIError(error) {
      this.getUserLoginError = getUserDisplayableErrorMessage(error)
      //console.log(typeof this.getUserLoginError, "store-->");
   }

   @action.bound
   userSignUp(userName, password) {
      const requestObj = {
         username: userName,
         password: password
      }
      const userPromise = this.signUpAPIService.signUpAPI(requestObj)

      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserSignUpAPIStatus, this.setUserSignUpAPIResponse)
         .catch(this.setGetUserSignUpAPIError)
   }

   @action.bound
   setGetUserSignUpAPIStatus(apiStatus) {
      this.getUserSignUpStatus = apiStatus
   }

   @action.bound
   setUserSignUpAPIResponse(response) {
      //alert('sign up done successfully');
      this.getUserSignUpError = null
   }

   @action.bound
   setGetUserSignUpAPIError(error) {
      this.getUserSignUpError = getUserDisplayableErrorMessage(error)
      // console.log(this.getUserSignUpError);
   }
}

export default AuthenticationStore
