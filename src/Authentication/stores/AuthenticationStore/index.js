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
   loginAPIService
   @observable getUserSignUpStatus
   @observable getUserSignUpError
   signUpAPIService
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
   userLogin(userName, password) {

      const requestObj = {
         "username": userName,
         "password": password
      }
      console.log(requestObj);
      const userPromise = this.loginAPIService.loginAPI(requestObj);
      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserLoginAPIStatus, this.setUserLoginAPIResponse)
         .catch(this.setGetUserLoginAPIError)
   }

   @action.bound
   setGetUserLoginAPIStatus(apiStatus) {
      this.getUserLoginStatus = apiStatus;
      console.log(apiStatus, "status");
   }

   @action.bound
   setUserLoginAPIResponse(response) {
      console.log(response, "response");
      setAccessToken(response.access_token)
      this.isAdmin = response.is_admin;


   }

   @action.bound
   setGetUserLoginAPIError(error) {
      console.log(error);
      this.getUserLoginError = error
   }

   @action.bound
   userSignUp(userName, password) {
      const requestObj = {
         "username": userName,
         "password": password
      }
      const userPromise = this.signUpAPIService.signUpAPI(requestObj)

      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserSignUpAPIStatus, this.setUserSignUpAPIResponse)
         .catch(this.setGetUserSignUpAPIError)
   }

   @action.bound
   setGetUserSignUpAPIStatus(apiStatus) {
      this.getUserSignUpStatus = apiStatus;
      console.log(apiStatus, "status");
   }

   @action.bound
   setUserSignUpAPIResponse(response) {
      console.log(response, "response");
   }

   @action.bound
   setGetUserSignUpAPIError(error) {
      this.getUserSignUpError = error;
      console.log(error, "error");
   }


   // @action.bound
   // postCredentialsOfLogin(userName, password) {

   //    this.loginCredentialsError = " ";
   //    const requestObj = {
   //       username: userName,
   //       password: password
   //    }
   //    const userPromise = this.loginAPIService.postCredentials(requestObj);

   //    return bindPromiseWithOnSuccess(userPromise)
   //       .to(this.setGetUserLoginCredentialsAPIStatus, this.setUserLoginCredentialsAPIResponse)
   //       .catch(this.setGetUserLoginCredentialAPIError)

   // }

   // @action.bound
   // setGetUserLoginCredentialsAPIStatus(status) {
   //    //console.log()
   // }

   // @action.bound
   // setUserLoginCredentialsAPIResponse(response) {
   //    //alert('posted credentials');
   // }

   // @action.bound
   // setGetUserLoginCredentialAPIError(error) {
   //    this.loginCredentialsError = error;
   //    //alert(this.loginCredentialsError);
   // }



}

export default AuthenticationStore;
