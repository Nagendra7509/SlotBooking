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
import LoginService from "../../services/LoginService/index.api";
import SignUpService from "../../services/SignUpService/index.api"

type setUserLoginAPIResponseProps={
   access_token:string,
   refresh_token:string,
   is_admin:boolean
}

type requestObjProps={
   username:string,
   password:string
}


class AuthenticationStore {
   @observable getUserLoginStatus!:number
   @observable getUserLoginError!:null | string
   loginAPIService:LoginService
   @observable getUserSignUpStatus!:number
   @observable getUserSignUpError!:null | string
   signUpAPIService:SignUpService
   @observable isAdmin:undefined | boolean
   @observable loginCredentialsError!:string
   @observable signUpCredentialError!:string

   constructor(loginAPIService:LoginService, signUpAPIService:SignUpService) {
      this.init()
      this.loginAPIService = loginAPIService
      this.signUpAPIService = signUpAPIService
   }

   init() {
      this.getUserSignUpStatus = API_INITIAL
      this.getUserSignUpError = null
      this.getUserLoginStatus = API_INITIAL
      this.getUserLoginError = null
      this.loginCredentialsError='';
      this.signUpCredentialError='';
      this.isAdmin=undefined;
   }

   @action.bound
   userLogin(userName:string, password:string) {
      const requestObj:requestObjProps= {
         username: userName,
         password: password
      }
      
      const userPromise = this.loginAPIService.loginAPI(requestObj)
      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserLoginAPIStatus, this.setUserLoginAPIResponse)
         .catch(this.setGetUserLoginAPIError)
   }

   @action.bound
   setGetUserLoginAPIStatus(apiStatus:number) {
      this.getUserLoginStatus = apiStatus
   }

   @action.bound
   setUserLoginAPIResponse(response:setUserLoginAPIResponseProps) {
      setAccessToken(response.access_token)
      this.isAdmin = response.is_admin
      this.getUserLoginError = null
   }

   @action.bound
   setGetUserLoginAPIError(error:object) {
      this.getUserLoginError = getUserDisplayableErrorMessage(error)
      
   }

   @action.bound
   userSignUp(userName:string, password:string) {
      const requestObj:requestObjProps = {
         username: userName,
         password: password
      }
      const userPromise = this.signUpAPIService.signUpAPI(requestObj)

      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetUserSignUpAPIStatus, this.setUserSignUpAPIResponse)
         .catch(this.setGetUserSignUpAPIError)
   }

   @action.bound
   setGetUserSignUpAPIStatus(apiStatus:number) {
      this.getUserSignUpStatus = apiStatus
   }

   @action.bound
   setUserSignUpAPIResponse(response) {
      //alert('sign up done successfully');
      this.getUserSignUpError = null
   }

   @action.bound
   setGetUserSignUpAPIError(error:object) {
      this.getUserSignUpError = getUserDisplayableErrorMessage(error)
      // console.log(this.getUserSignUpError);
   }
}

export default AuthenticationStore
