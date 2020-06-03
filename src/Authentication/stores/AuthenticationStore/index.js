import React from 'react'
import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
}
from '@ib/api-constants'
import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { setAccessToken } from '../../utils/StorageUtils'

class AuthenticationStore {

   @observable getUserLoginStatus
   @observable getUserLoginError
   @observable loginAPIService
   @observable getUserSignUpStatus
   @observable getUserSignUpError
   @observable signUpAPIService
   @observable isAdmin
   @observable loginCredentialsError = "";

   constructor(loginAPIService, signUpAPIService) {
      this.init()
      this.loginAPIService = loginAPIService
      this.signUpAPIService = signUpAPIService
   }

   init() {
      this.getUserSignUpStatus = API_INITIAL
      this.getUserSignInAPIError = null
      this.getUserLoginStatus = API_INITIAL
      this.getUserLoginError = null
      this.isAdmin;
   }

   @action.bound
   userLogin() {

      const userPromise = this.loginAPIService.loginAPI();
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
      this.isAdmin = response.is_admin;


   }

   @action.bound
   setGetUserLoginAPIError(error) {
      this.getUserLoginError = error
   }

   @action.bound
   userSignUp(userName, password) {
      const requestObj = {
         username: userName,
         password: password
      }
      const userPromise = this.SignUpAPIService.signUpAPI(requestObj)

      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserSignUpAPIStatus, this.setUserSignUpAPIResponse)
         .catch(this.setGetUserSignUpAPIError)
   }

   @action.bound
   setGetUserSignUpAPIStatus(apiStatus) {
      this.getUserSignUpStatus = apiStatus;
   }

   @action.bound
   setUserSignUpAPIResponse(response) {

   }

   @action.bound
   setGetUserSignUpAPIError(error) {
      this.getUserSignUpError = error;
   }


   @action.bound
   postCredentialsOfLogin(userName, password) {

      this.loginCredentialsError = " ";
      const requestObj = {
         username: userName,
         password: password
      }
      const userPromise = this.loginAPIService.postCredentials(requestObj);

      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserLoginCredentialsAPIStatus, this.setUserLoginCredentialsAPIResponse)
         .catch(this.setGetUserLoginCredentialAPIError)

   }

   @action.bound
   setGetUserLoginCredentialsAPIStatus(status) {
      //console.log()
   }

   @action.bound
   setUserLoginCredentialsAPIResponse(response) {
      //alert('posted credentials');
   }

   @action.bound
   setGetUserLoginCredentialAPIError(error) {
      this.loginCredentialsError = error;
      //alert(this.loginCredentialsError);
   }



}

export default AuthenticationStore;
