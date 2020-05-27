import React from "react";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { Redirect } from "react-router-dom";

import { setAccessToken, clearUserSession } from "../../utils/StorageUtils";

class AuthenticationStore {

    @observable getUserLoginStatus;
    @observable getUserLoginError;
    @observable loginAPIService;
    @observable getUserSignUpStatus;
    @observable getUserSignUpError;
    @observable signUpAPIService;

    constructor(loginAPIService, signUpAPIService) {
        this.init();
        this.loginAPIService = loginAPIService;
        this.signUpAPIService = signUpAPIService;
    }

    init() {
        this.getUserSignUpStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
        this.getUserLoginStatus = API_INITIAL;
        this.getUserLoginError = null;
    }


    @action.bound
    userLogin(userName, password) {
        console.log(this.loginAPIService);
        const requestObj = {
            username: userName,
            password: password
        };
        //const userPromise = this.loginAPIService.loginAPI(requestObj);

        return bindPromiseWithOnSuccess(this.loginAPIService)
            .to(this.setUserLoginAPIResponse)
            .catch(this.setGetUserLoginAPIError);

    }

    @action.bound
    setGetUserLoginAPIStatus(apiStatus) {
        this.getUserLoginStatus = apiStatus;
    }

    @action.bound
    setUserLoginAPIResponse(response) {
        //Get access token
        setAccessToken(response.access_token);
    }

    @action.bound
    setGetUserLoginAPIError(error) {
        this.getUserLoginError = error;
    }


    @action.bound
    userSignUp(userName, password) {
        const requestObj = {
            username: userName,
            password: password
        };
        const userPromise = this.SignUpAPIService.signUpAPI(requestObj);

        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setGetUserSignUpAPIStatus, this.setUserSignUpAPIResponse)
            .catch(this.setGetUserSignUpAPIError);
    }

    @action.bound
    setGetUserSignUpAPIStatus(apiStatus) {
        this.getUserSignUpStatus = apiStatus;
    }

    @action.bound
    setUserSignUpAPIResponse(response) {
        //Response
    }

    @action.bound
    setGetUserSignUpAPIError(error) {
        this.getUserSignUpError = error;
    }






}

export default AuthenticationStore;
